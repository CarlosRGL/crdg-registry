'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LabelExample() {
    return (
        <div className="grid w-full max-w-sm gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Smith" />
        </div>
    );
}
