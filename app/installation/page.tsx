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
                    The registry works with any shadcn project: Next.js, Vite, Laravel + Inertia…
                </p>
            </header>

            <Step n={1} title="Requirements">
                <ul className="list-disc space-y-1 pl-5 text-fg-2">
                    <li>
                        <strong className="text-foreground">Tailwind CSS v4</strong> (no <code>tailwind.config.js</code>).
                    </li>
                    <li>
                        A shadcn project using a <strong className="text-foreground">Base UI</strong> style: <code>&quot;style&quot;: &quot;base-*&quot;</code>{' '}
                        in <code>components.json</code> (the <code>shadcn init</code> default). Components depend on{' '}
                        <code>@base-ui/react</code>, not Radix.
                    </li>
                </ul>
                <Command value="npx shadcn@latest init" />
            </Step>

            <Step n={2} title="Add the registry">
                <p className="text-fg-2">
                    Add <code>@crdg</code> to the registries in <code>components.json</code>:
                </p>
                <CodeBlock code={componentsJson} lang="json" title="components.json (excerpt)" />
            </Step>

            <Step n={3} title="Install">
                <p className="text-fg-2">Everything at once — theme and components:</p>
                <Command value="npx shadcn add @crdg/loniar" />
                <p className="text-fg-2">Or one by one:</p>
                <Command value="npx shadcn add @crdg/loniar-theme" />
                <Command value="npx shadcn add @crdg/button @crdg/empty-state" />
                <p className="text-fg-2">Inertia projects: Laravel flash messages become toasts.</p>
                <Command value="npx shadcn add @crdg/use-inertia-toasts" />
            </Step>

            <Step n={4} title="Wire up the theme and toasts">
                <p className="text-fg-2">
                    <code>initializeTheme()</code> (<code>@crdg/use-appearance</code>) runs when the app starts;{' '}
                    <code>useInertiaToasts()</code> runs once, next to the <code>&lt;Toaster /&gt;</code>.
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

            <Step n={5} title="Direct access">
                <p className="text-fg-2">
                    Every item is a public JSON file, readable without any configuration:
                </p>
                <Command value={`npx shadcn add ${REGISTRY_URL.replace('{name}', 'button')}`} />
            </Step>
        </article>
    );
}
