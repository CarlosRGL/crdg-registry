'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SwitchExample() {
    return (
        <div className="flex flex-col gap-3">
            <Label>
                <Switch defaultChecked />
                Online booking open
            </Label>
            <Label>
                <Switch size="sm" />
                Size "sm"
            </Label>
            <Label>
                <Switch disabled />
                Disabled
            </Label>
        </div>
    );
}
