'use client';

import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount } from '@/components/ui/avatar';

export default function AvatarExample() {
    return (
        <div className="flex flex-wrap items-center gap-6">
            <Avatar size="sm">
                <AvatarFallback>CR</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarFallback>AL</AvatarFallback>
                <AvatarBadge className="bg-success" />
            </Avatar>
            <Avatar size="lg">
                <AvatarFallback>MN</AvatarFallback>
            </Avatar>
            <AvatarGroup>
                <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>SB</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>PL</AvatarFallback>
                </Avatar>
                <AvatarGroupCount>+4</AvatarGroupCount>
            </AvatarGroup>
        </div>
    );
}
