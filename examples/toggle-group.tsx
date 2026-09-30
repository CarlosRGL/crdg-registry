'use client';

import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function ToggleGroupExample() {
    const [view, setView] = useState<string[]>(['week']);

    return (
        <div className="flex flex-col items-center gap-6">
            <ToggleGroup variant="segmented" value={view} onValueChange={(next) => next.length && setView(next)}>
                <ToggleGroupItem value="day">Jour</ToggleGroupItem>
                <ToggleGroupItem value="week">Semaine</ToggleGroupItem>
                <ToggleGroupItem value="month">Mois</ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup variant="outline" defaultValue={['left']}>
                <ToggleGroupItem value="left" aria-label="Aligner à gauche">
                    <AlignLeftIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Centrer">
                    <AlignCenterIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Aligner à droite">
                    <AlignRightIcon />
                </ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup size="sm" multiple defaultValue={['sms']}>
                <ToggleGroupItem value="sms">SMS</ToggleGroupItem>
                <ToggleGroupItem value="email">E-mail</ToggleGroupItem>
            </ToggleGroup>
        </div>
    );
}
