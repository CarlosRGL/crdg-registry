'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

// The <Toaster /> is mounted once in the site layout.
export default function SonnerExample() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <Button variant="outline" onClick={() => toast('Appointment rescheduled')}>
                Neutral
            </Button>
            <Button variant="outline" onClick={() => toast.success('Changes saved')}>
                Success
            </Button>
            <Button variant="outline" onClick={() => toast.info('New version available')}>
                Info
            </Button>
            <Button variant="outline" onClick={() => toast.warning('Slot almost full')}>
                Warning
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.error("Sending failed", { description: 'The server is not responding.' })}
            >
                Error
            </Button>
            <Button
                variant="outline"
                onClick={() =>
                    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
                        loading: 'Sending…',
                        success: 'Sent',
                        error: 'Failed',
                    })
                }
            >
                Promise
            </Button>
        </div>
    );
}
