'use client';

import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

/** Registry files have no 'use client' directive, so they are mounted from here. */
export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            {children}
            <Toaster />
        </TooltipProvider>
    );
}
