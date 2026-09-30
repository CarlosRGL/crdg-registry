'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function SwitchExample() {
    return (
        <div className="flex flex-col gap-3">
            <Label className="flex items-center gap-2">
                <Switch defaultChecked />
                Réservation en ligne ouverte
            </Label>
            <Label className="flex items-center gap-2">
                <Switch size="sm" />
                Taille « sm »
            </Label>
            <Label className="flex items-center gap-2 opacity-60">
                <Switch disabled />
                Désactivé
            </Label>
        </div>
    );
}
