# @crdg — registre shadcn

Registre shadcn du thème **loniar** et de ses composants Base UI, avec sa vitrine de
documentation. Un seul site Next.js sert les deux : les pages de documentation et les items du
registre (`/r/{name}.json`), déployés sur Vercel.

Prérequis : Tailwind v4, projet shadcn en style **Base UI** (`base-*` dans `components.json`, le défaut de `shadcn init`). Les composants dépendent de `@base-ui/react`.

```json
// components.json
"registries": { "@crdg": "https://crdg-registry.vercel.app/r/{name}.json" }
```

```bash
npx shadcn add @crdg/loniar              # thème + tous les composants
npx shadcn add @crdg/loniar-theme        # thème seul
npx shadcn add @crdg/button @crdg/empty-state # à la carte
npx shadcn add @crdg/use-inertia-toasts  # projets Inertia : flash Laravel → toasts
```

`useInertiaToasts()` s'appelle une fois, à côté du `<Toaster />`. `initializeTheme()`
(`@crdg/use-appearance`) s'appelle au démarrage de l'application.

## Développer la vitrine

```bash
pnpm install
pnpm dev     # thème CSS + shadcn build + next dev
pnpm build   # thème CSS + shadcn build (→ public/r) + next build
```

- `registry.json` et `registry/crdg/` sont la source unique : la vitrine importe ces fichiers
  par alias (`@/components/ui/*` → `registry/crdg/ui/*`, idem `states/` et `hooks/`), elle
  montre donc exactement ce qui est distribué.
- `app/theme.css` est généré depuis l'item `loniar-theme` par `scripts/theme-css.mjs` (non versionné).
- Un exemple par item dans `examples/{name}.tsx`, déclaré dans `examples/index.tsx` ; l'onglet
  « Code » affiche ce fichier, l'onglet « Source » le fichier du registre.
- L'URL publique vient de `NEXT_PUBLIC_REGISTRY_URL` (défaut : `https://crdg-registry.vercel.app`),
  voir `lib/config.ts`.

## Régénérer depuis vernalis-rdv

```bash
python3 build-theme.py ~/Sites/vernalis-rdv/resources/css/app.css
python3 build-components.py ~/Sites/vernalis-rdv/resources/js
pnpm build
```

Un nouvel item a besoin d'un exemple (`examples/{name}.tsx` + `examples/index.tsx`) pour avoir
un aperçu ; sans exemple, sa page n'affiche que la source.
