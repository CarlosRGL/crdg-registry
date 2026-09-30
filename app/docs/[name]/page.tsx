import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CodeBlock, Command } from '@/components/docs/code-block';
import { ItemTabs } from '@/components/docs/item-tabs';
import { ThemeShowcase } from '@/components/docs/theme-showcase';
import { categoryOf, getItem, items, titleOf, type RegistryItem } from '@/lib/registry';
import { readExample, readSource } from '@/lib/source';

export const dynamicParams = false;

type Props = { params: Promise<{ name: string }> };

export function generateStaticParams() {
    return items.map((item) => ({ name: item.name }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const item = getItem((await params).name);

    return item ? { title: titleOf(item), description: item.description } : {};
}

function DependencyLink({ name }: { name: string }) {
    if (name.startsWith('@crdg/')) {
        const target = name.slice('@crdg/'.length);

        return (
            <Link href={`/docs/${target}`} className="text-primary underline-offset-4 hover:underline">
                {name}
            </Link>
        );
    }

    return <span>{name}</span>;
}

function Dependencies({ item }: { item: RegistryItem }) {
    const npm = item.dependencies ?? [];
    const registry = item.registryDependencies ?? [];

    if (npm.length === 0 && registry.length === 0) {
        return <p className="text-muted-foreground">Aucune dépendance.</p>;
    }

    return (
        <dl className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
                <dt className="text-xs font-medium text-muted-foreground">Paquets npm</dt>
                <dd className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {npm.length ? npm.map((dep) => <span key={dep} className="rounded-md border bg-surface-2 px-1.5 py-0.5">{dep}</span>) : '—'}
                </dd>
            </div>
            <div className="space-y-1.5">
                <dt className="text-xs font-medium text-muted-foreground">Dépendances du registre</dt>
                <dd className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {registry.length
                        ? registry.map((dep) => (
                              <span key={dep} className="rounded-md border bg-surface-2 px-1.5 py-0.5">
                                  <DependencyLink name={dep} />
                              </span>
                          ))
                        : '—'}
                </dd>
            </div>
        </dl>
    );
}

export default async function ItemPage({ params }: Props) {
    const item = getItem((await params).name);

    if (!item) {
        notFound();
    }

    const file = item.files?.[0];
    const source = file ? readSource(file.path) : null;
    const example = readExample(item.name);

    return (
        <article className="mx-auto max-w-4xl space-y-10">
            <header className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">{categoryOf(item).label}</p>
                <h1 className="text-2xl font-semibold tracking-tight">{titleOf(item)}</h1>
                {item.description && <p className="max-w-2xl text-base text-fg-2">{item.description}</p>}
            </header>

            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Installation</h2>
                <Command value={`npx shadcn add @crdg/${item.name}`} />
                {file?.target && (
                    <p className="text-muted-foreground">
                        Déposé dans <code className="font-mono text-xs">{file.target}</code>.
                    </p>
                )}
            </section>

            {item.name === 'loniar-theme' && <ThemeShowcase />}

            {source && file && (
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">{example ? 'Exemple' : 'Code'}</h2>
                    <ItemTabs
                        name={item.name}
                        code={example ? <CodeBlock code={example} title={`examples/${item.name}.tsx`} /> : undefined}
                        source={<CodeBlock code={source} title={file.path.replace('registry/crdg/', '')} />}
                    />
                </section>
            )}

            {item.type === 'registry:item' && (
                <section className="space-y-3">
                    <h2 className="text-lg font-semibold">Contenu</h2>
                    <p className="text-fg-2">
                        Installe le thème et {(item.registryDependencies?.length ?? 1) - 1} items en une commande.
                    </p>
                </section>
            )}

            <section className="space-y-3">
                <h2 className="text-lg font-semibold">Dépendances</h2>
                <Dependencies item={item} />
            </section>
        </article>
    );
}
