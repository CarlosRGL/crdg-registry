'use client';

import { Separator } from '@/components/ui/separator';

export default function SeparatorExample() {
    return (
        <div className="w-full max-w-sm">
            <p className="font-medium">Loniar City Hall</p>
            <p className="text-muted-foreground">Residents' services</p>
            <Separator className="my-3" />
            <div className="flex h-5 items-center gap-3">
                <span>Monday</span>
                <Separator orientation="vertical" />
                <span>Wednesday</span>
                <Separator orientation="vertical" />
                <span>Friday</span>
            </div>
        </div>
    );
}
