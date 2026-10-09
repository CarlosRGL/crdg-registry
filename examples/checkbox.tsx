'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxExample() {
    return (
        <div className="flex flex-col gap-3">
            <Label>
                <Checkbox defaultChecked />
                Send a reminder by SMS
            </Label>
            <Label>
                <Checkbox />
                Send a reminder by email
            </Label>
            <Label>
                <Checkbox disabled />
                Option unavailable
            </Label>
        </div>
    );
}
