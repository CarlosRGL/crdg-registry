'use client';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const SIDES = [
    ['right', 'Right'],
    ['left', 'Left'],
    ['top', 'Top'],
    ['bottom', 'Bottom'],
] as const;

export default function SheetExample() {
    return (
        <div className="flex flex-wrap gap-2">
            {SIDES.map(([side, label]) => (
                <Sheet key={side}>
                    <SheetTrigger render={<Button variant="outline" />}>{label}</SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>Appointment details</SheetTitle>
                            <SheetDescription>Mardi 6 octobre, 9 h 30 — Main counter.</SheetDescription>
                        </SheetHeader>
                        <SheetFooter>
                            <SheetClose render={<Button variant="secondary" />}>Close</SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    );
}
