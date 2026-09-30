import registry from '@/registry.json';

export type RegistryFile = { path: string; type: string; target?: string };

export type RegistryItem = {
    name: string;
    type: string;
    title?: string;
    description?: string;
    dependencies?: string[];
    registryDependencies?: string[];
    files?: RegistryFile[];
};

export type Category = { slug: string; label: string; items: RegistryItem[] };

export const items = registry.items as RegistryItem[];

const CATEGORIES: { slug: string; label: string; match: (item: RegistryItem) => boolean }[] = [
    { slug: 'theme', label: 'Theme', match: (i) => i.type === 'registry:theme' || i.type === 'registry:item' },
    { slug: 'ui', label: 'Components', match: (i) => i.type === 'registry:ui' },
    { slug: 'states', label: 'States', match: (i) => i.type === 'registry:component' },
    { slug: 'hooks', label: 'Hooks', match: (i) => i.type === 'registry:hook' },
];

export const categories: Category[] = CATEGORIES.map(({ slug, label, match }) => ({
    slug,
    label,
    items: items.filter(match),
}));

export function getItem(name: string): RegistryItem | undefined {
    return items.find((item) => item.name === name);
}

export function categoryOf(item: RegistryItem): Category {
    return categories.find((category) => category.items.includes(item))!;
}

/** "dropdown-menu" → "Dropdown menu" when the item has no title. */
export function titleOf(item: RegistryItem): string {
    if (item.title) {
        return item.title;
    }
    const words = item.name.replace(/-/g, ' ');
    return words.charAt(0).toUpperCase() + words.slice(1);
}
