'use client';

import { useEffect, useState } from 'react';
import { useAppearance, type Appearance } from '@/hooks/use-appearance';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const OPTIONS: [Appearance, string][] = [
    ['light', 'Clair'],
    ['dark', 'Sombre'],
    ['system', 'Système'],
];

export default function UseAppearanceExample() {
    const { appearance, resolvedAppearance, updateAppearance } = useAppearance();
    // Le mode résolu dépend du navigateur : on l'affiche après le montage pour ne pas diverger du HTML du serveur.
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
                Préférence : {appearance} · appliqué : {mounted ? resolvedAppearance : '…'}
            </p>
        </div>
    );
}
