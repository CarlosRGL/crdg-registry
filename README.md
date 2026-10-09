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

## What the theme changes in your project

- **Type scale.** `loniar-theme` redefines Tailwind's scale for the whole project: `text-sm` is
  13.5px (body), `text-base` 14.5px, plus `text-meta` (12.5px) and `text-2xs` (11px).
  Components from other registries render denser too. Text fields stay at 16px below `md` so
  iOS Safari does not zoom on focus.
- **Control heights.** `h-control-xs|sm|md|lg` (22 / 26 / 30 / 36px) size buttons, inputs and selects together.
- **Status colors.** `success`, `warning`, `info`, `destructive`, each with a `-soft` tint
  (8%) that keeps the status text at 4.5:1 or more on a card and on the page background.
  `destructive-foreground` is the text on a solid `bg-destructive`.
- **Field borders.** `--input` equals `--border` and sits below the WCAG 1.4.11 3:1 ratio on
  purpose (it darkens to `--border-strong` on hover). Raise it if your project must meet 1.4.11.
- **App tokens not used by the components**, available to your screens: ink levels `fg-2|3|4`
  (`fg-4` is decorative only, 3.4:1), surfaces `surface-2|3`, `sunken`, `divider`, `primary-soft`,
  `primary-line`, elevations `shadow-card|pop|drag`, easings `ease-gr8r|spring|drawer`,
  `tone-*` and `chart-1..5`, layout `spacing-row|topbar`.

Components that use hooks or Base UI primitives ship with `"use client"`, so they work in
Next.js App Router server components.

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
