'use client';

import { BoldIcon, ItalicIcon, StarIcon } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

export default function ToggleExample() {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Toggle aria-label="Gras">
                <BoldIcon />
            </Toggle>
            <Toggle variant="outline" aria-label="Italique" defaultPressed>
                <ItalicIcon />
            </Toggle>
            <Toggle size="sm" variant="outline">
                <StarIcon data-icon="inline-start" />
                Favori
            </Toggle>
            <Toggle size="lg" disabled>
                Désactivé
            </Toggle>
        </div>
    );
}
