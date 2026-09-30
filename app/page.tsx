import { ArrowRightIcon } from 'lucide-react';
import { Command } from '@/components/docs/code-block';
import { HomeActions } from '@/components/docs/home-actions';
import { ThemeShowcase } from '@/components/docs/theme-showcase';
import { categories } from '@/lib/registry';

export default function HomePage() {
    return (
        <div className="mx-auto max-w-4xl space-y-12">
            <header className="space-y-4">
                <p className="text-xs font-medium text-muted-foreground">Registre shadcn @crdg</p>
                <h1 className="text-3xl font-semibold tracking-tight text-balance">Le thème loniar et ses composants Base UI</h1>
                <p className="max-w-2xl text-base text-fg-2 text-pretty">
                    Neutres chauds, un seul accent indigo, une échelle de texte dense et des ombres chaudes, en clair
                    comme en sombre. {categories.map((c) => `${c.items.length} ${c.label.toLowerCase()}`).join(', ')}, à
                    installer d'un bloc ou à la carte avec la CLI shadcn.
                </p>
                <Command value="npx shadcn add @crdg/loniar" />
                <HomeActions />
            </header>
            <ThemeShowcase />
            <p className="flex items-center gap-1 text-muted-foreground">
                <ArrowRightIcon className="size-4" /> Les pages de la barre latérale montrent chaque composant tel qu'il
                est distribué.
            </p>
        </div>
    );
}
