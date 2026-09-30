'use client';

import { CircleAlertIcon, InfoIcon } from 'lucide-react';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function AlertExample() {
    return (
        <div className="grid w-full max-w-lg gap-3">
            <Alert>
                <InfoIcon />
                <AlertTitle>Créneaux publiés</AlertTitle>
                <AlertDescription>Les usagers peuvent réserver dès maintenant.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <CircleAlertIcon />
                <AlertTitle>Synchronisation interrompue</AlertTitle>
                <AlertDescription>Le service distant ne répond pas.</AlertDescription>
                <AlertAction>
                    <Button size="xs" variant="outline">
                        Réessayer
                    </Button>
                </AlertAction>
            </Alert>
        </div>
    );
}
