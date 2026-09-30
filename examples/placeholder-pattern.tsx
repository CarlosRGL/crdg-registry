'use client';

import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

export default function PlaceholderPatternExample() {
    return (
        <div className="relative h-40 w-full max-w-md overflow-hidden rounded-xl border">
            <PlaceholderPattern className="absolute inset-0 size-full stroke-foreground/15" />
        </div>
    );
}
