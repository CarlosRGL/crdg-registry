import { router } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

type FlashToast = {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
};

/**
 * À appeler une fois sous le <Toaster /> : transforme le flash `toast` de Laravel
 * (`Inertia::flash('toast', [...])`) en toast, et signale les requêtes qui n'aboutissent pas.
 */
export function useInertiaToasts(): void {
    useEffect(() => {
        let lastMethod = 'get';
        const stopFlash = router.on('flash', (event) => {
            const data = (event as CustomEvent).detail?.flash?.toast as FlashToast | undefined;

            if (data) {
                toast[data.type](data.message);
            }
        });
        const stopTracking = router.on('start', (event) => {
            lastMethod = event.detail.visit.method;
        });
        const stopListening = router.on('networkError', (event) => {
            event.preventDefault();
            toast.error(
                lastMethod === 'get'
                    ? "La page n'a pas pu être chargée."
                    : "Vos modifications n'ont pas pu être enregistrées.",
                { description: 'Le serveur ne répond pas. Vérifiez votre connexion, puis réessayez.' },
            );
        });

        return () => {
            stopFlash();
            stopTracking();
            stopListening();
        };
    }, []);
}
