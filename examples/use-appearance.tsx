'use client';

import { useEffect, useState } from 'react';
import { useAppearance, type Appearance } from '@/hooks/use-appearance';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const OPTIONS: [Appearance, string][] = [
    ['light', 'Light'],
    ['dark', 'Dark'],
    ['system', 'System'],
];

export default function UseAppearanceExample() {
    const { appearance, resolvedAppearance, updateAppearance } = useAppearance();
    // The resolved mode depends on the browser: it is shown after mount to avoid diverging from the server HTML.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="flex flex-col items-center gap-3">
            <ToggleGroup
                variant="segmented"
                value={[appearance]}
                onValueChange={(next) => next[0] && updateAppearance(next[0] as Appearance)}
            >
                {OPTIONS.map(([value, label]) => (
                    <ToggleGroupItem key={value} value={value}>
                        {label}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
            <p className="text-muted-foreground">
                Preference: {appearance} · applied: {mounted ? resolvedAppearance : '…'}
            </p>
        </div>
    );
}
