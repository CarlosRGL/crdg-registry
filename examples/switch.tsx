'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SwitchExample() {
    return (
        <div className="flex flex-col gap-3">
            <Label className="flex items-center gap-2">
                <Switch defaultChecked />
                Online booking open
            </Label>
            <Label className="flex items-center gap-2">
                <Switch size="sm" />
                Size "sm"
            </Label>
            <Label className="flex items-center gap-2 opacity-60">
                <Switch disabled />
                Disabled
            </Label>
        </div>
    );
}
