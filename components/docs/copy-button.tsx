'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CopyButton({ value, className }: { value: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            className={cn('text-muted-foreground', className)}
            aria-label={copied ? 'Copié' : 'Copier'}
            onClick={async () => {
                await navigator.clipboard.writeText(value);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }}
        >
            {copied ? <CheckIcon /> : <CopyIcon />}
        </Button>
    );
}
