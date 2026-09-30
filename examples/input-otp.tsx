'use client';

import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp';

export default function InputOTPExample() {
    const [value, setValue] = useState('');

    return (
        <div className="flex flex-col items-center gap-3">
            <InputOTP maxLength={6} value={value} onChange={setValue}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
            <p className="text-muted-foreground">{value ? `Saisi : ${value}` : 'Saisissez le code reçu par SMS.'}</p>
        </div>
    );
}
