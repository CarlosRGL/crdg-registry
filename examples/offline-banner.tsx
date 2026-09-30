'use client';

import OfflineBanner from '@/components/states/offline-banner';

// Le bandeau n'apparaît que hors ligne : coupez le réseau (DevTools → Network → Offline).
export default function OfflineBannerExample() {
    return (
        <div className="w-full overflow-hidden rounded-lg border">
            <OfflineBanner />
            <p className="p-4 text-muted-foreground">
                Passez le navigateur hors ligne pour voir le bandeau s'afficher au-dessus de ce texte.
            </p>
        </div>
    );
}
