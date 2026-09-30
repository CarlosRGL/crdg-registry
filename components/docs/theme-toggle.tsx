'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { initializeTheme, useAppearance } from '@/hooks/use-appearance';

/**
 * Bascule clair/sombre, branchée sur @crdg/use-appearance comme dans un projet réel. L'icône
 * suit la classe .dark en CSS : le serveur ne connaît pas le mode, le rendu reste identique.
 */
export function ThemeToggle() {
    const { updateAppearance } = useAppearance();

    useEffect(() => {
        initializeTheme();
    }, []);

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Basculer le thème clair/sombre"
            onClick={() => updateAppearance(document.documentElement.classList.contains('dark') ? 'light' : 'dark')}
        >
            <SunIcon className="hidden dark:block" />
            <MoonIcon className="dark:hidden" />
        </Button>
    );
}
