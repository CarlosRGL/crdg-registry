'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InputExample() {
    return (
        <div className="grid w-full max-w-sm gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email">Adresse e-mail</Label>
                <Input id="email" type="email" placeholder="prenom.nom@exemple.fr" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="phone">Téléphone (invalide)</Label>
                <Input id="phone" aria-invalid defaultValue="06 12" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="disabled">Désactivé</Label>
                <Input id="disabled" disabled placeholder="Non modifiable" />
            </div>
        </div>
    );
}
