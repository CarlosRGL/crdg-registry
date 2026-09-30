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
    ['right', 'Droite'],
    ['left', 'Gauche'],
    ['top', 'Haut'],
    ['bottom', 'Bas'],
] as const;

export default function SheetExample() {
    return (
        <div className="flex flex-wrap gap-2">
            {SIDES.map(([side, label]) => (
                <Sheet key={side}>
                    <SheetTrigger render={<Button variant="outline" />}>{label}</SheetTrigger>
                    <SheetContent side={side}>
                        <SheetHeader>
                            <SheetTitle>Détail du rendez-vous</SheetTitle>
                            <SheetDescription>Mardi 6 octobre, 9 h 30 — Guichet principal.</SheetDescription>
                        </SheetHeader>
                        <SheetFooter>
                            <SheetClose render={<Button variant="secondary" />}>Fermer</SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            ))}
        </div>
    );
}
