'use client';

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

export default function FieldExample() {
    return (
        <FieldGroup className="max-w-sm">
            <Field>
                <FieldLabel htmlFor="field-name">Service name</FieldLabel>
                <Input id="field-name" placeholder="Passport renewal" />
                <FieldDescription>Shown to residents on the booking page.</FieldDescription>
            </Field>
            <Field data-invalid>
                <FieldLabel htmlFor="field-duration">Duration (minutes)</FieldLabel>
                <Input id="field-duration" defaultValue="0" aria-invalid />
                <FieldError>Enter a duration of at least 5 minutes.</FieldError>
            </Field>
            <FieldSet>
                <FieldLegend variant="label">Confirmation</FieldLegend>
                <RadioGroup defaultValue="auto">
                    <Field orientation="horizontal">
                        <RadioGroupItem value="auto" id="field-auto" />
                        <FieldLabel htmlFor="field-auto">Confirm automatically</FieldLabel>
                    </Field>
                    <Field orientation="horizontal">
                        <RadioGroupItem value="manual" id="field-manual" />
                        <FieldLabel htmlFor="field-manual">An agent confirms each request</FieldLabel>
                    </Field>
                </RadioGroup>
            </FieldSet>
            <Field>
                <FieldLabel htmlFor="field-notes">Instructions</FieldLabel>
                <Textarea id="field-notes" placeholder="Bring proof of address…" />
            </Field>
        </FieldGroup>
    );
}
