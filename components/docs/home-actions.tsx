'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HomeActions() {
    return (
        <div className="flex flex-wrap gap-2">
            <Button nativeButton={false} render={<Link href="/installation" />}>
                Installer
            </Button>
            <Button variant="outline" nativeButton={false} render={<Link href="/docs/button" />}>
                Parcourir les composants
            </Button>
        </div>
    );
}
