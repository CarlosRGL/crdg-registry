'use client';

import { InfoIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const SIDES = [
    ['top', 'Top'],
    ['right', 'Right'],
    ['bottom', 'Bottom'],
    ['left', 'Left'],
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
                    <TooltipContent side={side}>Tooltip on the {label.toLowerCase()} side</TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
}
