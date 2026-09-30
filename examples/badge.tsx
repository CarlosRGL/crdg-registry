'use client';

import { CheckIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const VARIANTS = ['default', 'secondary', 'outline', 'success', 'warning', 'info', 'destructive', 'ghost', 'link'] as const;

export default function BadgeExample() {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((variant) => (
                <Badge key={variant} variant={variant}>
                    {variant}
                </Badge>
            ))}
            <Badge variant="success">
                <CheckIcon data-icon="inline-start" />
                Confirmed
            </Badge>
        </div>
    );
}
