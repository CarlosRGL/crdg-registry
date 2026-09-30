'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { initializeTheme, useAppearance } from '@/hooks/use-appearance';

/** Bascule clair/sombre, branchée sur @crdg/use-appearance comme dans un projet réel. */
export function ThemeToggle() {
    const { resolvedAppearance, updateAppearance } = useAppearance();

    useEffect(() => {
        initializeTheme();
    }, []);

    const isDark = resolvedAppearance === 'dark';

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            aria-label={isDark ? 'Passer en thème clair' : 'Passer en thème sombre'}
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
        >
            {isDark ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}
