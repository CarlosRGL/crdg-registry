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
            <DialogTrigger render={<Button variant="outline" />}>Rename counter</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Rename counter</DialogTitle>
                    <DialogDescription>The new name appears on the public site immediately.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                    <Label htmlFor="counter-name">Name</Label>
                    <Input id="counter-name" defaultValue="Main counter" />
                </div>
                <DialogFooter>
                    <DialogClose render={<Button variant="secondary" />}>Cancel</DialogClose>
                    <DialogClose render={<Button />}>Save</DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
