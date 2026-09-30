'use client';

import { useState, type ReactNode } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ExamplePreview } from '@/examples';

type Tab = 'preview' | 'code' | 'source';

const LABELS: Record<Tab, string> = { preview: 'Aperçu', code: 'Code', source: 'Source' };

/** Aperçu interactif, code de l'exemple, fichier distribué par le registre. */
export function ItemTabs({ name, code, source }: { name: string; code?: ReactNode; source: ReactNode }) {
    const tabs: Tab[] = code ? ['preview', 'code', 'source'] : ['source'];
    const [tab, setTab] = useState<Tab>(tabs[0]);

    return (
        <div className="space-y-3">
            <ToggleGroup
                variant="segmented"
                size="sm"
                value={[tab]}
                onValueChange={(next) => next[0] && setTab(next[0] as Tab)}
                aria-label="Affichage"
            >
                {tabs.map((value) => (
                    <ToggleGroupItem key={value} value={value}>
                        {LABELS[value]}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
            {tab === 'preview' && (
                <div className="flex min-h-72 items-center justify-center rounded-xl border bg-card p-6 shadow-card sm:p-10">
                    <ExamplePreview name={name} />
                </div>
            )}
            {tab === 'code' && code}
            {tab === 'source' && source}
        </div>
    );
}
