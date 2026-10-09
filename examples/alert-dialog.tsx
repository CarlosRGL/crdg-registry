'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export default function AlertDialogExample() {
    return (
        <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline">Archive the service</Button>} />
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Archive this service?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Residents will no longer be able to book it. Existing appointments are kept.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="secondary">Cancel</AlertDialogCancel>
                    <AlertDialogAction>Archive</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
