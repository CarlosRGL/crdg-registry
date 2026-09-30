'use client';

import { useEffect, useState } from 'react';
import OfflineBanner from '@/components/states/offline-banner';

// Le bandeau lit navigator.onLine dès son premier rendu : en SSR (Next.js), montez-le après
// l'hydratation pour que le HTML du serveur et celui du client coïncident.
export default function OfflineBannerExample() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="w-full overflow-hidden rounded-lg border">
            {mounted && <OfflineBanner />}
            <p className="p-4 text-muted-foreground">
                Passez le navigateur hors ligne (DevTools → Network → Offline) pour voir le bandeau s'afficher au-dessus
                de ce texte.
            </p>
        </div>
    );
}
