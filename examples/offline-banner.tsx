'use client';

import { useEffect, useState } from 'react';
import OfflineBanner from '@/components/states/offline-banner';

// The banner reads navigator.onLine on its first render: with SSR (Next.js), mount it after
// hydration so the server and client HTML match.
export default function OfflineBannerExample() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="w-full overflow-hidden rounded-lg border">
            {mounted && <OfflineBanner />}
            <p className="p-4 text-muted-foreground">
                Take the browser offline (DevTools → Network → Offline) to see the banner appear above this text.
            </p>
        </div>
    );
}
