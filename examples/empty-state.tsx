'use client';

import { CalendarX2Icon, PlusIcon } from 'lucide-react';
import EmptyState from '@/components/states/empty-state';
import { Button } from '@/components/ui/button';

export default function EmptyStateExample() {
    return (
        <EmptyState
            icon={CalendarX2Icon}
            title="No appointments today"
            description="Residents' bookings will appear here. You can also create one at the counter."
            actions={
                <Button>
                    <PlusIcon data-icon="inline-start" />
                    New appointment
                </Button>
            }
        />
    );
}
