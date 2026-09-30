"""Copie les composants de vernalis-rdv dans registry/ et les déclare dans registry.json."""
import json, re, sys, shutil
from pathlib import Path

SRC = Path(sys.argv[1])  # resources/js de vernalis-rdv
OUT = Path('registry/crdg')
shutil.rmtree(OUT, ignore_errors=True)
NPM = ['@base-ui/react', 'class-variance-authority', 'lucide-react', 'sonner', 'input-otp']

def portable(code):
    # Le projet importe `cn` du paquet npm « cn » ; le registre s'aligne sur l'utilitaire shadcn.
    return re.sub(r'''from ["']cn["']''', 'from "@/lib/utils"', code)

def item(name, kind, rel, target, code):
    path = OUT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(code)
    deps = sorted({p for p in NPM if re.search(r'''from ["']%s(/[\w-]+)*["']''' % re.escape(p), code)})
    reg = {'utils'} if '@/lib/utils' in code else set()
    reg |= {'@crdg/' + m for m in re.findall(r'''from ["']@/components/ui/([\w-]+)["']''', code)}
    reg |= {'@crdg/' + m for m in re.findall(r'''from ["']@/hooks/([\w-]+)["']''', code)}
    reg |= {'@crdg/' + m for m in re.findall(r'''from ["']\./([\w-]+)["']''', code)}
    f = {'path': str(path), 'type': kind}
    if target:
        f['target'] = target
    return {'name': name, 'type': kind, 'dependencies': deps,
            'registryDependencies': sorted(reg), 'files': [f]}

items = []
for p in sorted((SRC / 'components/ui').glob('*.tsx')):
    code = portable(p.read_text())
    if p.stem == 'sonner':
        # Les messages flash d'Inertia passent par @crdg/inertia-toasts, hors du composant.
        code = code.replace('import { useFlashToast } from "@/hooks/use-flash-toast"\n', '')
        code = re.sub(r'\n  // 🔴 Seul point.*?useFlashToast\(\)\n', '', code, flags=re.S)
    items.append(item(p.stem, 'registry:ui', f'ui/{p.name}', None, code))

for p in sorted((SRC / 'components/states').glob('*.tsx')):
    code = portable(p.read_text())
    if p.stem == 'offline-banner':
        code = code.replace("import { router } from '@inertiajs/react';\n", '').replace("import { toast } from 'sonner';\n", '')
        start = code.index('\n        // L')
        end = code.index('        return () => {')
        code = code[:start] + '\n' + code[end:]
        code = code.replace('            stopTracking();\n            stopListening();\n', '')
        code = re.sub(r'/\*\*.*?\*/', '/** Bandeau hors ligne : suit `navigator.onLine`. */', code, count=1, flags=re.S)
    items.append(item(p.stem, 'registry:component', f'states/{p.name}', f'components/states/{p.name}', code))

for name in ['use-mobile', 'use-appearance']:
    p = next((SRC / 'hooks').glob(name + '.ts*'))
    items.append(item(name, 'registry:hook', f'hooks/{p.name}', None, portable(p.read_text())))

inertia = '''import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

type FlashToast = {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
};

/**
 * À appeler une fois sous le <Toaster /> : transforme le flash `toast` de Laravel
 * (`Inertia::flash('toast', [...])`) en toast, et signale les requêtes qui n'aboutissent pas.
 */
export function useInertiaToasts(): void {
    useEffect(() => {
        let lastMethod = 'get';
        const stopFlash = router.on('flash', (event) => {
            const data = (event as CustomEvent).detail?.flash?.toast as FlashToast | undefined;

            if (data) {
                toast[data.type](data.message);
            }
        });
        const stopTracking = router.on('start', (event) => {
            lastMethod = event.detail.visit.method;
        });
        const stopListening = router.on('networkError', (event) => {
            event.preventDefault();
            toast.error(
                lastMethod === 'get'
                    ? "La page n'a pas pu être chargée."
                    : "Vos modifications n'ont pas pu être enregistrées.",
                { description: 'Le serveur ne répond pas. Vérifiez votre connexion, puis réessayez.' },
            );
        });

        return () => {
            stopFlash();
            stopTracking();
            stopListening();
        };
    }, []);
}
'''
it = item('use-inertia-toasts', 'registry:hook', 'hooks/use-inertia-toasts.ts', None, inertia)
it['dependencies'] = ['@inertiajs/react', 'sonner']
it['registryDependencies'] = ['@crdg/sonner']
items.append(it)

registry = json.load(open('registry.json'))
theme = next(i for i in registry['items'] if i['name'] == 'loniar-theme')
bundle = {'name': 'loniar', 'type': 'registry:item', 'title': 'Loniar (thème + composants)',
          'registryDependencies': ['@crdg/loniar-theme'] + ['@crdg/' + i['name'] for i in items if i['name'] != 'use-inertia-toasts']}
registry['items'] = [theme, bundle] + items
json.dump(registry, open('registry.json', 'w'), ensure_ascii=False, indent=2)
print(len(items), 'items')
