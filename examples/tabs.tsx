'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TabsExample() {
    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Tabs defaultValue="upcoming">
                <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <p className="text-muted-foreground">12 appointments this week.</p>
                </TabsContent>
                <TabsContent value="past">
                    <p className="text-muted-foreground">148 appointments since January.</p>
                </TabsContent>
                <TabsContent value="cancelled">
                    <p className="text-muted-foreground">3 cancellations.</p>
                </TabsContent>
            </Tabs>
            <Tabs defaultValue="general">
                <TabsList variant="line">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="slots">Slots</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
}
