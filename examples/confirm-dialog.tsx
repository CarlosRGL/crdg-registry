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
            trigger={<Button variant="destructive">Cancel appointment</Button>}
            title="Cancel this appointment?"
            description="The resident will receive a cancellation email. This action is permanent."
            confirmLabel="Cancel appointment"
            processing={processing}
            onConfirm={() => {
                setProcessing(true);
                setTimeout(() => {
                    setProcessing(false);
                    setOpen(false);
                    toast.success('Appointment cancelled');
                }, 1000);
            }}
        />
    );
}
