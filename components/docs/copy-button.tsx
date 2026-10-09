'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ICON = 'text-muted-foreground group-hover/button:text-foreground';

export function CopyButton({ value, className }: { value: string; className?: string }) {
    const [copied, setCopied] = useState(false);

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            className={className}
            aria-label={copied ? 'Copied' : 'Copy'}
            onClick={async () => {
                await navigator.clipboard.writeText(value);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }}
        >
            {copied ? <CheckIcon className={ICON} /> : <CopyIcon className={ICON} />}
        </Button>
    );
}
