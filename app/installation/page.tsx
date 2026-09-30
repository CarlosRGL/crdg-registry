import type { Metadata } from 'next';
import { CodeBlock, Command } from '@/components/docs/code-block';
import { REGISTRY_URL } from '@/lib/config';

export const metadata: Metadata = { title: 'Installation' };

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
    return (
        <section className="relative space-y-3 border-l pb-2 pl-6">
            <span className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full border bg-card text-xs font-medium">
                {n}
            </span>
            <h2 className="text-lg leading-6 font-semibold">{title}</h2>
            {children}
        </section>
    );
}

export default function InstallationPage() {
    const componentsJson = JSON.stringify(
        { style: 'base-nova', tailwind: { css: 'app/globals.css' }, registries: { '@crdg': REGISTRY_URL } },
        null,
        2,
    );

    return (
        <article className="mx-auto max-w-3xl space-y-10">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold tracking-tight">Installation</h1>
                <p className="text-base text-fg-2">
                    Le registre se branche sur n'importe quel projet shadcn : Next.js, Vite, Laravel + Inertia…
                </p>
            </header>

            <Step n={1} title="Prérequis">
                <ul className="list-disc space-y-1 pl-5 text-fg-2">
                    <li>
                        <strong className="text-foreground">Tailwind CSS v4</strong> (aucun <code>tailwind.config.js</code>).
                    </li>
                    <li>
                        Un projet shadcn en style <strong className="text-foreground">Base UI</strong> : <code>&quot;style&quot;: &quot;base-*&quot;</code>{' '}
                        dans <code>components.json</code> (le défaut de <code>shadcn init</code>). Les composants dépendent de{' '}
                        <code>@base-ui/react</code>, pas de Radix.
                    </li>
                </ul>
                <Command value="npx shadcn@latest init" />
            </Step>

            <Step n={2} title="Déclarer le registre">
                <p className="text-fg-2">
                    Ajoutez <code>@crdg</code> aux registres de <code>components.json</code> :
                </p>
                <CodeBlock code={componentsJson} lang="json" title="components.json (extrait)" />
            </Step>

            <Step n={3} title="Installer">
                <p className="text-fg-2">Tout d'un coup — thème et composants :</p>
                <Command value="npx shadcn add @crdg/loniar" />
                <p className="text-fg-2">Ou à la carte :</p>
                <Command value="npx shadcn add @crdg/loniar-theme" />
                <Command value="npx shadcn add @crdg/button @crdg/empty-state" />
                <p className="text-fg-2">Projets Inertia : les messages flash de Laravel deviennent des toasts.</p>
                <Command value="npx shadcn add @crdg/use-inertia-toasts" />
            </Step>

            <Step n={4} title="Brancher le thème et les toasts">
                <p className="text-fg-2">
                    <code>initializeTheme()</code> (<code>@crdg/use-appearance</code>) s&apos;appelle au démarrage de
                    l&apos;application ; <code>useInertiaToasts()</code> une seule fois, à côté du <code>&lt;Toaster /&gt;</code>.
                </p>
                <CodeBlock
                    title="app.tsx"
                    code={`import { Toaster } from '@/components/ui/sonner';
import { initializeTheme } from '@/hooks/use-appearance';
import { useInertiaToasts } from '@/hooks/use-inertia-toasts';

initializeTheme();

function Shell({ children }: { children: React.ReactNode }) {
    useInertiaToasts();

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}`}
                />
            </Step>

            <Step n={5} title="Accès direct">
                <p className="text-fg-2">
                    Chaque item est un JSON public, lisible sans configuration :
                </p>
                <Command value={`npx shadcn add ${REGISTRY_URL.replace('{name}', 'button')}`} />
            </Step>
        </article>
    );
}
