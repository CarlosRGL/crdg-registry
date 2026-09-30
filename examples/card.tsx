'use client';

import { MoreHorizontalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function CardExample() {
    return (
        <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Main counter</CardTitle>
                    <CardDescription>Passports and ID cards</CardDescription>
                    <CardAction>
                        <Button variant="ghost" size="icon-sm" aria-label="Actions">
                            <MoreHorizontalIcon />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-semibold tabular-nums">86 %</p>
                    <p className="text-muted-foreground">occupancy rate this week</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm">
                        View schedule
                    </Button>
                </CardFooter>
            </Card>
            <Card size="sm">
                <CardHeader>
                    <CardTitle>Size "sm"</CardTitle>
                    <CardDescription>Tighter spacing.</CardDescription>
                </CardHeader>
                <CardContent>12 appointments today.</CardContent>
            </Card>
        </div>
    );
}
