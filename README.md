# @crdg — registre shadcn

Prérequis : Tailwind v4, projet shadcn en style **Radix** (`radix-*` dans `components.json`, pas `base-*`).

```json
// components.json
"registries": { "@crdg": "https://carlosrgl.github.io/crdg-registry/r/{name}.json" }
```

```bash
npx shadcn add @crdg/loniar              # thème + tous les composants
npx shadcn add @crdg/loniar-theme        # thème seul
npx shadcn add @crdg/button @crdg/states # à la carte
npx shadcn add @crdg/use-inertia-toasts  # projets Inertia : flash Laravel → toasts
```

`useInertiaToasts()` s'appelle une fois, à côté du `<Toaster />`. `initializeTheme()`
(`@crdg/use-appearance`) s'appelle au démarrage de l'application.

## Régénérer depuis vernalis-rdv

```bash
python3 build-theme.py ~/Sites/vernalis-rdv/resources/css/app.css
python3 build-components.py ~/Sites/vernalis-rdv/resources/js
npx shadcn build -o public/r
```
