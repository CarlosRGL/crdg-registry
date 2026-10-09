'use client';

import { Field, FieldDescription, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';

export default function TextareaExample() {
    return (
        <div className="flex w-full max-w-sm flex-col gap-4">
            <Field>
                <FieldLabel htmlFor="textarea-notes">Internal note</FieldLabel>
                <Textarea id="textarea-notes" placeholder="Visible to agents only" />
                <FieldDescription>Grows with its content.</FieldDescription>
            </Field>
            <Textarea aria-label="Invalid" aria-invalid defaultValue="Too short" />
            <Textarea aria-label="Disabled" disabled placeholder="Disabled" />
        </div>
    );
}
