'use client';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { SiteNav } from './site-nav';

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Open menu" />}>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto">
                <div className="px-4 pt-4">
                    <SheetTitle>@crdg</SheetTitle>
                </div>
                <div className="px-4 pb-4">
                    <SiteNav onNavigate={() => setOpen(false)} />
                </div>
            </SheetContent>
        </Sheet>
    );
}
