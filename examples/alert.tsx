'use client';

import { CircleAlertIcon, InfoIcon } from 'lucide-react';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function AlertExample() {
    return (
        <div className="grid w-full max-w-lg gap-3">
            <Alert>
                <InfoIcon />
                <AlertTitle>Slots published</AlertTitle>
                <AlertDescription>Residents can book right away.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <CircleAlertIcon />
                <AlertTitle>Synchronisation interrompue</AlertTitle>
                <AlertDescription>The remote service is not responding.</AlertDescription>
                <AlertAction>
                    <Button size="xs" variant="outline">
                        Try again
                    </Button>
                </AlertAction>
            </Alert>
        </div>
    );
}
