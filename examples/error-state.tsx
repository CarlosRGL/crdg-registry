'use client';

import { useState } from 'react';
import ErrorState, { type ErrorKind } from '@/components/states/error-state';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const KINDS: [ErrorKind, string][] = [
    ['failed', 'Échec'],
    ['offline', 'Hors ligne'],
    ['forbidden', 'Interdit'],
    ['not-found', 'Introuvable'],
];

export default function ErrorStateExample() {
    const [kind, setKind] = useState<ErrorKind>('failed');

    return (
        <div className="flex w-full flex-col items-center">
            <ToggleGroup
                variant="segmented"
                size="sm"
                value={[kind]}
                onValueChange={(next) => next[0] && setKind(next[0] as ErrorKind)}
            >
                {KINDS.map(([value, label]) => (
                    <ToggleGroupItem key={value} value={value}>
                        {label}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
            <ErrorState kind={kind} onRetry={() => undefined} />
        </div>
    );
}
