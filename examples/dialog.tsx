'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DialogExample() {
    return (
        <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>Renommer le guichet</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Renommer le guichet</DialogTitle>
                    <DialogDescription>Le nouveau nom s'affiche aussitôt sur le site public.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                    <Label htmlFor="counter-name">Nom</Label>
                    <Input id="counter-name" defaultValue="Guichet principal" />
                </div>
                <DialogFooter>
                    <DialogClose render={<Button variant="secondary" />}>Annuler</DialogClose>
                    <DialogClose render={<Button />}>Enregistrer</DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
