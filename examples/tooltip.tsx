'use client';

import { InfoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const SIDES = [
    ['top', 'Haut'],
    ['right', 'Droite'],
    ['bottom', 'Bas'],
    ['left', 'Gauche'],
] as const;

export default function TooltipExample() {
    return (
        <div className="flex flex-wrap gap-2">
            {SIDES.map(([side, label]) => (
                <Tooltip key={side}>
                    <TooltipTrigger render={<Button variant="outline" />}>
                        <InfoIcon data-icon="inline-start" />
                        {label}
                    </TooltipTrigger>
                    <TooltipContent side={side}>Infobulle côté « {label.toLowerCase()} »</TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
