'use client';

import { Spinner } from '@/components/ui/spinner';

export default function SpinnerExample() {
    return (
        <div className="flex items-center gap-4">
            <Spinner />
            <Spinner className="size-6 text-primary" />
            <Spinner className="size-8 text-muted-foreground" />
        </div>
    );
}
