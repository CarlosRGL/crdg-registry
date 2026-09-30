'use client';

import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function ToggleGroupExample() {
    const [view, setView] = useState<string[]>(['week']);

    return (
        <div className="flex flex-col items-center gap-6">
            <ToggleGroup variant="segmented" value={view} onValueChange={(next) => next.length && setView(next)}>
                <ToggleGroupItem value="day">Day</ToggleGroupItem>
                <ToggleGroupItem value="week">Week</ToggleGroupItem>
                <ToggleGroupItem value="month">Month</ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup variant="outline" defaultValue={['left']}>
                <ToggleGroupItem value="left" aria-label="Align left">
                    <AlignLeftIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Centrer">
                    <AlignCenterIcon />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align right">
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
