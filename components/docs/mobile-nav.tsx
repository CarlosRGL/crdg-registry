'use client';

import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { SiteNav } from './site-nav';

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Ouvrir le menu" />}>
                <MenuIcon />
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto p-4">
                <SheetHeader className="p-0">
                    <SheetTitle>@crdg</SheetTitle>
                </SheetHeader>
                <SiteNav onNavigate={() => setOpen(false)} />
            </SheetContent>
        </Sheet>
    );
}
