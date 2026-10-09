'use client';

import { WifiOff } from 'lucide-react';
import { useSyncExternalStore } from 'react';

/** Bandeau hors ligne : suit `navigator.onLine`. */
function subscribe(onChange: () => void) {
    window.addEventListener('offline', onChange);
    window.addEventListener('online', onChange);

    return () => {
        window.removeEventListener('offline', onChange);
        window.removeEventListener('online', onChange);
    };
}

export default function OfflineBanner() {
    // Rendu serveur : en ligne par défaut, pour que l'hydratation ne diverge pas.
    const offline = useSyncExternalStore(
        subscribe,
        () => !navigator.onLine,
        () => false,
    );

    if (!offline) {
        return null;
    }

    return (
        <div
            role="status"
            className="bg-warning-soft text-warning border-b px-4 py-2 text-sm font-medium"
        >
            <span className="flex items-center gap-2">
                <WifiOff className="size-4 shrink-0" aria-hidden="true" />
                Vous êtes hors ligne. Les modifications ne pourront pas être
                enregistrées avant le retour du réseau.
            </span>
        </div>
    );
}
