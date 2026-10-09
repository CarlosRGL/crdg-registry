'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function RadioGroupExample() {
    return (
        <RadioGroup defaultValue="week" className="w-fit">
            <Label>
                <RadioGroupItem value="day" />
                Day
            </Label>
            <Label>
                <RadioGroupItem value="week" />
                Week
            </Label>
            <Label>
                <RadioGroupItem value="month" disabled />
                Month (disabled)
            </Label>
        </RadioGroup>
    );
}
