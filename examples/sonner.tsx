'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

// Le <Toaster /> est monté une fois dans la mise en page du site.
export default function SonnerExample() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" onClick={() => toast('Rendez-vous déplacé')}>
                Neutre
            </Button>
            <Button variant="outline" onClick={() => toast.success('Modifications enregistrées')}>
                Succès
            </Button>
            <Button variant="outline" onClick={() => toast.info('Nouvelle version disponible')}>
                Info
            </Button>
            <Button variant="outline" onClick={() => toast.warning('Créneau presque complet')}>
                Avertissement
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.error("L'envoi a échoué", { description: 'Le serveur ne répond pas.' })}
            >
                Erreur
            </Button>
            <Button
                variant="outline"
                onClick={() =>
                    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
                        loading: 'Envoi en cours…',
                        success: 'Envoyé',
                        error: 'Échec',
                    })
                }
            >
                Promesse
            </Button>
        </div>
    );
}
