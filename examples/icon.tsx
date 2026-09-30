'use client';

import { BellIcon, CalendarIcon, SearchIcon } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

export default function IconExample() {
    return (
        <div className="flex items-center gap-4 text-muted-foreground">
            <Icon iconNode={CalendarIcon} className="size-4" />
            <Icon iconNode={BellIcon} className="size-5" />
            <Icon iconNode={SearchIcon} className="size-6 text-primary" />
            <Icon iconNode={null} />
        </div>
    );
}
