'use client';

import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

/** Les fichiers du registre n'ont pas de directive 'use client' : on les monte d'ici. */
export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            {children}
            <Toaster />
        </TooltipProvider>
    );
}
