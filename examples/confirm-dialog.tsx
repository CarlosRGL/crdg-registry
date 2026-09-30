'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import ConfirmDialog from '@/components/states/confirm-dialog';
import { Button } from '@/components/ui/button';

export default function ConfirmDialogExample() {
    const [open, setOpen] = useState(false);
    const [processing, setProcessing] = useState(false);

    return (
        <ConfirmDialog
            open={open}
            onOpenChange={setOpen}
            trigger={<Button variant="destructive">Annuler le rendez-vous</Button>}
            title="Annuler ce rendez-vous ?"
            description="L'usager recevra un e-mail d'annulation. Cette action est définitive."
            confirmLabel="Annuler le rendez-vous"
            processing={processing}
            onConfirm={() => {
                setProcessing(true);
                setTimeout(() => {
                    setProcessing(false);
                    setOpen(false);
                    toast.success('Rendez-vous annulé');
                }, 1000);
            }}
        />
    );
}
