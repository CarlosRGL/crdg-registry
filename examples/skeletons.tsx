'use client';

import { CardsSkeleton, ColumnSkeleton, RowsSkeleton, SlotsSkeleton } from '@/components/states/skeletons';

export default function SkeletonsExample() {
    return (
        <div className="grid w-full gap-8">
            <section className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">RowsSkeleton</p>
                <RowsSkeleton rows={3} />
            </section>
            <section className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">CardsSkeleton</p>
                <CardsSkeleton cards={3} />
            </section>
            <div className="grid gap-8 sm:grid-cols-2">
                <section className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">ColumnSkeleton</p>
                    <ColumnSkeleton items={3} />
                </section>
                <section className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">SlotsSkeleton</p>
                    <SlotsSkeleton slots={6} />
                </section>
            </div>
        </div>
    );
}
