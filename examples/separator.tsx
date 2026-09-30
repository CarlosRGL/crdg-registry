'use client';

import { Separator } from '@/components/ui/separator';

export default function SeparatorExample() {
    return (
        <div className="w-full max-w-sm">
            <p className="font-medium">Mairie de Loniar</p>
            <p className="text-muted-foreground">Service population</p>
            <Separator className="my-3" />
            <div className="flex h-5 items-center gap-3">
                <span>Lundi</span>
                <Separator orientation="vertical" />
                <span>Mercredi</span>
                <Separator orientation="vertical" />
                <span>Vendredi</span>
            </div>
        </div>
    );
}
