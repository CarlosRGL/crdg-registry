import { WifiOff } from 'lucide-react';
import { useEffect, useState } from 'react';

/** Bandeau hors ligne : suit `navigator.onLine`. */
export default function OfflineBanner() {
    const [offline, setOffline] = useState(
        () => typeof navigator !== 'undefined' && !navigator.onLine,
    );

    useEffect(() => {
        const goOffline = () => setOffline(true);
        const goOnline = () => setOffline(false);
        window.addEventListener('offline', goOffline);
        window.addEventListener('online', goOnline);

        return () => {
            window.removeEventListener('offline', goOffline);
            window.removeEventListener('online', goOnline);
        };
    }, []);

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
