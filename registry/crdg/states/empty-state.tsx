import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * État vide (plan 049, d'après gr8r « System states ») : icône dans un carré discret, titre,
 * une phrase qui dit quoi faire, une action. `tone="destructive"` sert aux états d'erreur
 * d'`ErrorState`, qui s'appuie sur ce composant.
 */
export default function EmptyState({
    icon: Icon,
    title,
    description,
    actions,
    tone = 'default',
    className,
}: {
    icon: LucideIcon;
    title: string;
    description?: ReactNode;
    actions?: ReactNode;
    tone?: 'default' | 'destructive';
    className?: string;
}) {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center gap-4 px-6 py-14 text-center',
                className,
            )}
        >
            <div
                className={cn(
                    'flex size-10 items-center justify-center rounded-lg',
                    tone === 'destructive'
                        ? 'bg-destructive-soft text-destructive'
                        : 'bg-surface-2 text-muted-foreground ring-border ring-1',
                )}
            >
                <Icon className="size-5" aria-hidden="true" />
            </div>
            <div className="space-y-1">
                <h3 className="text-base font-semibold">{title}</h3>
                {description && (
                    <p className="text-muted-foreground mx-auto max-w-md text-sm text-pretty">
                        {description}
                    </p>
                )}
            </div>
            {actions && (
                <div className="flex flex-wrap justify-center gap-2">
                    {actions}
                </div>
            )}
        </div>
    );
}
