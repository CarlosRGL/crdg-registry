'use client';

import { MoreHorizontalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function CardExample() {
    return (
        <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Guichet principal</CardTitle>
                    <CardDescription>Passeports et cartes d'identité</CardDescription>
                    <CardAction>
                        <Button variant="ghost" size="icon-sm" aria-label="Actions">
                            <MoreHorizontalIcon />
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-semibold tabular-nums">86 %</p>
                    <p className="text-muted-foreground">taux d'occupation cette semaine</p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm">
                        Voir le planning
                    </Button>
                </CardFooter>
            </Card>
            <Card size="sm">
                <CardHeader>
                    <CardTitle>Taille « sm »</CardTitle>
                    <CardDescription>Espacements resserrés.</CardDescription>
                </CardHeader>
                <CardContent>12 rendez-vous aujourd'hui.</CardContent>
            </Card>
        </div>
    );
}
