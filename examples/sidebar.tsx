'use client';

import { CalendarIcon, HomeIcon, SettingsIcon, UsersIcon } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';

const ENTRIES = [
    { label: 'Home', icon: HomeIcon, active: true },
    { label: 'Appointments', icon: CalendarIcon, badge: '12' },
    { label: 'Team', icon: UsersIcon },
    { label: 'Settings', icon: SettingsIcon },
];

// The sidebar is contained within the preview: fixed height, relative position.
export default function SidebarExample() {
    return (
        <div className="h-96 w-full overflow-hidden rounded-lg border [&_[data-slot=sidebar-container]]:absolute">
            <SidebarProvider className="relative min-h-0 h-full">
                <Sidebar collapsible="icon">
                    <SidebarHeader className="px-3 py-2 font-semibold">City Hall</SidebarHeader>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Counters</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {ENTRIES.map((entry) => (
                                        <SidebarMenuItem key={entry.label}>
                                            <SidebarMenuButton isActive={entry.active} tooltip={entry.label}>
                                                <entry.icon />
                                                <span>{entry.label}</span>
                                            </SidebarMenuButton>
                                            {entry.badge && <SidebarMenuBadge>{entry.badge}</SidebarMenuBadge>}
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset className="p-4">
                    <SidebarTrigger />
                    <p className="mt-3 text-muted-foreground">The trigger collapses the bar to icons.</p>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}
