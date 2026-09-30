"""Generates registry.json (loniar-theme item) from the vernalis-rdv app.css."""
import json, re, sys

SRC = sys.argv[1]
css = open(SRC).read()

def block(selector):
    m = re.search(r'^' + re.escape(selector) + r' \{\n(.*?)^\}', css, re.S | re.M)
    body = re.sub(r'/\*.*?\*/', '', m.group(1), flags=re.S)
    out = {}
    for name, value in re.findall(r'--([\w-]+):\s*(.*?);', body, re.S):
        out[name] = ' '.join(value.split())
    return out

light, dark = block(':root'), block('.dark')

theme = {}
for m in re.finditer(r'^@theme(?: inline)? \{\n(.*?)^\}', css, re.S | re.M):
    body = re.sub(r'/\*.*?\*/', '', m.group(1), flags=re.S)
    for name, value in re.findall(r'--([\w-]+):\s*(.*?);', body, re.S):
        theme[name] = ' '.join(value.split())

# The showcase (.site-page, --ease-out-strong) and the calendar stay in Vernalis.
item = {
    "$schema": "https://ui.shadcn.com/schema/registry-item.json",
    "name": "loniar-theme",
    "type": "registry:theme",
    "title": "Loniar",
    "description": "Warm neutrals, indigo accent, dense type scale (13.5px), warm shadows. Light and dark.",
    "author": "crdg",
    "registryDependencies": ["font-geist"],
    "dependencies": ["tw-animate-css"],
    "cssVars": {"theme": theme, "light": light, "dark": dark},
    "css": {
        "@layer base": {
            "*": {"@apply border-border outline-ring/50": {}, "scrollbar-width": "thin", "scrollbar-color": "var(--scrollbar) transparent"},
            "body": {"@apply bg-background text-foreground text-sm": {}},
            "html": {"-webkit-font-smoothing": "antialiased"},
            "h1, h2, h3, h4, h5, h6": {"@apply font-heading": {}},
            "::selection": {"background": "color-mix(in oklab, var(--primary) 18%, transparent)", "color": "var(--foreground)"},
            "input, textarea, [contenteditable]": {"caret-color": "var(--primary)"},
            ":focus-visible": {"outline": "2px solid var(--ring)", "outline-offset": "2px"},
        }
    },
}

registry = {
    "$schema": "https://ui.shadcn.com/schema/registry.json",
    "name": "crdg",
    "homepage": "https://github.com/CarlosRGL/crdg-registry",
    "items": [item],
}
json.dump(registry, open('registry.json', 'w'), ensure_ascii=False, indent=2)
print(len(light), 'light', len(dark), 'dark', len(theme), 'theme')
