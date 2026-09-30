'use client';

import { CopyIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Base UI: use onClick (onSelect never fires), and a label must live inside a group.
export default function DropdownMenuExample() {
    const [showArchived, setShowArchived] = useState(false);
    const [density, setDensity] = useState('compact');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>Actions</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Rendez-vous</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => toast('Modification…')}>
                        <PencilIcon />
                        Modifier
                        <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.success('Link copied')}>
                        <CopyIcon />
                        Copy link
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Move to</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem onClick={() => toast('Guichet 1')}>Guichet 1</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => toast('Guichet 2')}>Guichet 2</DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuLabel>View</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem checked={showArchived} onCheckedChange={setShowArchived}>
                        Show archived
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuRadioGroup value={density} onValueChange={setDensity}>
                        <DropdownMenuRadioItem value="compact">Compact</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="comfortable">Confortable</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={() => toast.error('Appointment cancelled')}>
                    <Trash2Icon />
                    Cancel appointment
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
