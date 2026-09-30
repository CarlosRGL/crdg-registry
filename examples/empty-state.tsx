'use client';

import { CalendarX2Icon, PlusIcon } from 'lucide-react';
import EmptyState from '@/components/states/empty-state';
import { Button } from '@/components/ui/button';

export default function EmptyStateExample() {
    return (
        <EmptyState
            icon={CalendarX2Icon}
            title="Aucun rendez-vous ce jour"
            description="Les réservations des usagers apparaîtront ici. Vous pouvez aussi en créer une au guichet."
            actions={
                <Button>
                    <PlusIcon data-icon="inline-start" />
                    Nouveau rendez-vous
                </Button>
            }
        />
    );
}
