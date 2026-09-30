'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InputExample() {
    return (
        <div className="grid w-full max-w-sm gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="first.last@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Phone (invalid)</Label>
                <Input id="phone" aria-invalid defaultValue="06 12" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="disabled">Disabled</Label>
                <Input id="disabled" disabled placeholder="Read-only" />
            </div>
        </div>
    );
}
