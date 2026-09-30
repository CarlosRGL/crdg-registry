import { ArrowRightIcon } from 'lucide-react';
import { Command } from '@/components/docs/code-block';
import { HomeActions } from '@/components/docs/home-actions';
import { ThemeShowcase } from '@/components/docs/theme-showcase';
import { categories } from '@/lib/registry';

export default function HomePage() {
    return (
        <div className="mx-auto max-w-4xl space-y-12">
            <header className="space-y-4">
                <p className="text-xs font-medium text-muted-foreground">@crdg shadcn registry</p>
                <h1 className="text-3xl font-semibold tracking-tight text-balance">The loniar theme and its Base UI components</h1>
                <p className="max-w-2xl text-base text-fg-2 text-pretty">
                    Warm neutrals, a single indigo accent, a dense type scale and warm shadows, in light and dark
                    mode. {categories.map((c) => `${c.items.length} ${c.label.toLowerCase()}`).join(', ')}, to install
                    all at once or one by one with the shadcn CLI.
                </p>
                <Command value="npx shadcn add @crdg/loniar" />
                <HomeActions />
            </header>
            <ThemeShowcase />
            <p className="flex items-center gap-1 text-muted-foreground">
                <ArrowRightIcon className="size-4" /> The sidebar pages show each component exactly as it is
                distributed.
            </p>
        </div>
    );
}
