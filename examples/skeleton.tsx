'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonExample() {
    return (
        <div className="flex w-full max-w-sm items-center gap-3">
            <Skeleton shape="circle" className="size-10" />
            <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
        </div>
    );
}
