import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

/**
 * Squelettes à la forme réelle du contenu (plan 049) : lignes de table, cartes, colonne.
 * Annoncés une seule fois aux lecteurs d'écran par `role="status"` ; les blocs gris sont
 * masqués. L'animation s'arrête sous `prefers-reduced-motion` (`ui/skeleton.tsx`).
 */
function SkeletonRegion({
    label,
    className,
    children,
}: {
    label: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div role="status" aria-live="polite" className={className}>
            <span className="sr-only">{label}</span>
            <div aria-hidden="true" className="contents">
                {children}
            </div>
        </div>
    );
}

const ROW_WIDTHS = ['w-2/5', 'w-1/3', 'w-1/2', 'w-1/4', 'w-2/5', 'w-1/3'];

export function RowsSkeleton({
    rows = 5,
    label = 'Chargement…',
    className,
}: {
    rows?: number;
    label?: string;
    className?: string;
}) {
    return (
        <SkeletonRegion label={label} className={cn('divide-y', className)}>
            {Array.from({ length: rows }, (_, index) => (
                <div key={index} className="h-row flex items-center gap-3 px-4">
                    <Skeleton shape="circle" className="size-4" />
                    <Skeleton
                        className={cn(
                            'h-3',
                            // oxlint-disable-next-line shadcn/require-static-classes -- ROW_WIDTHS only holds static width classes.
                            ROW_WIDTHS[index % ROW_WIDTHS.length],
                        )}
                    />
                    <Skeleton className="ml-auto h-3 w-16" />
                    <Skeleton className="h-3 w-10" />
                </div>
            ))}
        </SkeletonRegion>
    );
}

export function CardsSkeleton({
    cards = 3,
    label = 'Chargement…',
    className,
}: {
    cards?: number;
    label?: string;
    className?: string;
}) {
    return (
        <SkeletonRegion
            label={label}
            className={cn(
                'grid gap-3 sm:grid-cols-2 lg:grid-cols-3',
                className,
            )}
        >
            {Array.from({ length: cards }, (_, index) => (
                <div
                    key={index}
                    className="bg-card shadow-card flex flex-col gap-3 rounded-lg p-4"
                >
                    <Skeleton className="h-3 w-1/3" />
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-2 w-full" />
                </div>
            ))}
        </SkeletonRegion>
    );
}

export function ColumnSkeleton({
    items = 4,
    label = 'Chargement…',
    className,
}: {
    items?: number;
    label?: string;
    className?: string;
}) {
    return (
        <SkeletonRegion
            label={label}
            className={cn(
                'bg-muted flex flex-col gap-2 rounded-lg p-2',
                className,
            )}
        >
            <Skeleton className="mb-1 h-3 w-1/3" />
            {Array.from({ length: items }, (_, index) => (
                <div
                    key={index}
                    className="bg-card shadow-card flex flex-col gap-2 rounded-md p-2.5"
                >
                    <Skeleton className="h-3 w-3/4" />
                    <Skeleton className="h-3 w-1/3" />
                </div>
            ))}
        </SkeletonRegion>
    );
}

/** Grille de créneaux horaires (déplacement, réservation assistée). */
export function SlotsSkeleton({
    slots = 9,
    label = 'Recherche des créneaux…',
    className,
}: {
    slots?: number;
    label?: string;
    className?: string;
}) {
    return (
        <SkeletonRegion
            label={label}
            className={cn('grid grid-cols-3 gap-2', className)}
        >
            {Array.from({ length: slots }, (_, index) => (
                <Skeleton key={index} className="h-control-sm" />
            ))}
        </SkeletonRegion>
    );
}
