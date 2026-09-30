// Écrit app/theme.css depuis l'item loniar-theme de registry.json : la vitrine porte
// exactement les variables distribuées, sans copie à tenir à jour.
import { readFileSync, writeFileSync } from 'node:fs';

const registry = JSON.parse(readFileSync('registry.json', 'utf8'));
const theme = registry.items.find((item) => item.name === 'loniar-theme');
const vars = (entries) =>
    Object.entries(entries)
        .map(([name, value]) => `  --${name}: ${value};`)
        .join('\n');

function rules(tree, indent = '') {
    return Object.entries(tree)
        .map(([key, value]) => {
            if (Object.keys(value).length === 0) {
                return `${indent}${key};`;
            }
            if (typeof value === 'string') {
                return `${indent}${key}: ${value};`;
            }
            return `${indent}${key} {\n${rules(value, indent + '  ')}\n${indent}}`;
        })
        .join('\n');
}

const css = [
    '/* Généré par scripts/theme-css.mjs depuis registry.json — ne pas éditer. */',
    `:root {\n${vars(theme.cssVars.light)}\n}`,
    `.dark {\n${vars(theme.cssVars.dark)}\n}`,
    `@theme inline {\n${vars(theme.cssVars.theme)}\n}`,
    rules(theme.css),
].join('\n\n');

writeFileSync('app/theme.css', css + '\n');
console.log('app/theme.css :', Object.keys(theme.cssVars.light).length, 'variables claires');
