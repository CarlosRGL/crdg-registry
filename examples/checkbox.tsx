'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxExample() {
    return (
        <div className="flex flex-col gap-3">
            <Label className="flex items-center gap-2">
                <Checkbox defaultChecked />
                Envoyer un rappel par SMS
            </Label>
            <Label className="flex items-center gap-2">
                <Checkbox />
                Envoyer un rappel par e-mail
            </Label>
            <Label className="flex items-center gap-2 opacity-60">
                <Checkbox disabled />
                Option indisponible
            </Label>
        </div>
    );
}
