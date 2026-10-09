'use client';

import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from '@/components/ui/popover';

export default function PopoverExample() {
    return (
        <Popover>
            <PopoverTrigger render={<Button variant="outline">Opening hours</Button>} />
            <PopoverContent align="start">
                <PopoverHeader>
                    <PopoverTitle>Town hall</PopoverTitle>
                    <PopoverDescription>Monday to Friday, 8:30am to 5pm.</PopoverDescription>
                </PopoverHeader>
            </PopoverContent>
        </Popover>
    );
}
