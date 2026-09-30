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
                <Label>Service</Label>
                <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="w-56">
                        <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Civil registry</SelectLabel>
                            <SelectItem value="id-card">ID card</SelectItem>
                            <SelectItem value="passport">Passport</SelectItem>
                        </SelectGroup>
                        <SelectSeparator />
                        <SelectGroup>
                            <SelectLabel>Other services</SelectLabel>
                            <SelectItem value="urbanism">Urban planning</SelectItem>
                            <SelectItem value="school" disabled>
                                School enrollment
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
                <Label>"toolbar" variant, small</Label>
                <Select defaultValue="week">
                    <SelectTrigger variant="toolbar" size="sm">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="day">Day</SelectItem>
                        <SelectItem value="week">Week</SelectItem>
                        <SelectItem value="month">Month</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
