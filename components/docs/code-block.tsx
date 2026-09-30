import { highlight } from '@/lib/highlight';
import { cn } from '@/lib/utils';
import { CopyButton } from './copy-button';

export async function CodeBlock({
    code,
    lang = 'tsx',
    title,
    className,
}: {
    code: string;
    lang?: string;
    title?: string;
    className?: string;
}) {
    const html = await highlight(code.trimEnd(), lang);

    return (
        <figure className={cn('overflow-hidden rounded-lg border bg-surface-2', className)}>
            <div className="flex items-center justify-between border-b py-1 pr-1 pl-3">
                <figcaption className="font-mono text-xs text-muted-foreground">{title ?? lang}</figcaption>
                <CopyButton value={code} />
            </div>
            <div
                className="max-h-[32rem] overflow-auto p-3 font-mono text-[12.5px] leading-5 [&_pre]:outline-none"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </figure>
    );
}

/** Copyable one-line command : `npx shadcn add @crdg/...`. */
export function Command({ value }: { value: string }) {
    return (
        <div className="flex items-center justify-between gap-2 rounded-lg border bg-surface-2 py-1 pr-1 pl-3 font-mono text-[12.5px]">
            <code className="overflow-x-auto whitespace-nowrap">
                <span className="text-muted-foreground select-none">$ </span>
                {value}
            </code>
            <CopyButton value={value} />
        </div>
    );
}
