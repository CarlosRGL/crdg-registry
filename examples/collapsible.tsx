'use client';

import { ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function CollapsibleExample() {
    return (
        <Collapsible className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-between gap-2">
                <p className="font-medium">3 pièces justificatives</p>
                <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Afficher" />}>
                    <ChevronsUpDownIcon />
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-3 py-2">Photo d'identité</div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-3 py-2">Justificatif de domicile</div>
                <div className="rounded-md border px-3 py-2">Timbre fiscal</div>
            </CollapsibleContent>
        </Collapsible>
    );
}
