'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { initializeTheme, useAppearance } from '@/hooks/use-appearance';

/**
 * Light/dark toggle, wired to @crdg/use-appearance as in a real project. The icon follows the
 * .dark class in CSS: the server does not know the mode, so the markup stays identical.
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
            aria-label="Toggle light/dark theme"
            onClick={() => updateAppearance(document.documentElement.classList.contains('dark') ? 'light' : 'dark')}
        >
            <SunIcon className="hidden dark:block" />
            <MoonIcon className="dark:hidden" />
        </Button>
    );
}
