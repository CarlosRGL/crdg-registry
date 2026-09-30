# @crdg — shadcn registry

shadcn registry for the **loniar** theme and its Base UI components, with its documentation
showcase. A single Next.js site serves both: the documentation pages and the registry items
(`/r/{name}.json`), deployed on Vercel.

Requirements: Tailwind v4 and a shadcn project using a **Base UI** style (`base-*` in `components.json`, the `shadcn init` default). Components depend on `@base-ui/react`.

```json
// components.json
"registries": { "@crdg": "https://crdg-registry.vercel.app/r/{name}.json" }
```

```bash
npx shadcn add @crdg/loniar              # theme + all components
npx shadcn add @crdg/loniar-theme        # theme only
npx shadcn add @crdg/button @crdg/empty-state # one by one
npx shadcn add @crdg/use-inertia-toasts  # Inertia projects: Laravel flash → toasts
```

Call `useInertiaToasts()` once, next to the `<Toaster />`. Call `initializeTheme()`
(`@crdg/use-appearance`) when the app starts.

## Developing the showcase

```bash
pnpm install
pnpm dev     # theme CSS + shadcn build + next dev
pnpm build   # theme CSS + shadcn build (→ public/r) + next build
```

- `registry.json` and `registry/crdg/` are the single source of truth: the showcase imports these
  files through aliases (`@/components/ui/*` → `registry/crdg/ui/*`, same for `states/` and
  `hooks/`), so it shows exactly what is distributed.
- `app/theme.css` is generated from the `loniar-theme` item by `scripts/theme-css.mjs` (not committed).
- One example per item in `examples/{name}.tsx`, registered in `examples/index.tsx`; the
  "Code" tab shows that file, the "Source" tab shows the registry file.
- The public URL comes from `NEXT_PUBLIC_REGISTRY_URL` (default: `https://crdg-registry.vercel.app`),
  see `lib/config.ts`.

## Regenerating from vernalis-rdv

```bash
python3 build-theme.py ~/Sites/vernalis-rdv/resources/css/app.css
python3 build-components.py ~/Sites/vernalis-rdv/resources/js
pnpm build
```

A new item needs an example (`examples/{name}.tsx` + `examples/index.tsx`) to get a preview;
without one, its page only shows the source.
