'use client';

import { CircleAlertIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon } from 'lucide-react';
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
            <Alert variant="success">
                <CircleCheckIcon />
                <AlertTitle>Calendar synchronised</AlertTitle>
                <AlertDescription>42 appointments imported from the previous tool.</AlertDescription>
            </Alert>
            <Alert variant="info">
                <InfoIcon />
                <AlertTitle>Maintenance on Sunday</AlertTitle>
                <AlertDescription>Booking stays open; exports pause from 2am to 4am.</AlertDescription>
            </Alert>
            <Alert variant="warning">
                <TriangleAlertIcon />
                <AlertTitle>Few slots left</AlertTitle>
                <AlertDescription>Only 3 slots remain this week.</AlertDescription>
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
