'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function SelectExample() {
    const [service, setService] = useState<string | null>('passport');

    return (
        <div className="flex flex-wrap items-end gap-6">
            <div className="grid gap-2">
                <Label>Démarche</Label>
                <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="w-56">
                        <SelectValue placeholder="Choisir une démarche" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>État civil</SelectLabel>
                            <SelectItem value="id-card">Carte d'identité</SelectItem>
                            <SelectItem value="passport">Passeport</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                            <SelectLabel>Autres services</SelectLabel>
                            <SelectItem value="urbanism">Urbanisme</SelectItem>
                            <SelectItem value="school" disabled>
                                Inscriptions scolaires
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
                <Label>Variante « toolbar », petite</Label>
                <Select defaultValue="week">
                    <SelectTrigger variant="toolbar" size="sm">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="day">Jour</SelectItem>
                        <SelectItem value="week">Semaine</SelectItem>
                        <SelectItem value="month">Mois</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
