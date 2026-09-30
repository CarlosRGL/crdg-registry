'use client';

import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ROWS = [
    { time: '09:00', name: 'Alice Martin', service: 'Passeport', status: 'Confirmé' },
    { time: '09:20', name: 'Bruno Petit', service: "Carte d'identité", status: 'En attente' },
    { time: '09:40', name: 'Chloé Durand', service: 'Passeport', status: 'Annulé' },
];

const TONE = { Confirmé: 'success', 'En attente': 'warning', Annulé: 'destructive' } as const;

export default function TableExample() {
    return (
        <Table>
            <TableCaption>Rendez-vous du mardi 6 octobre</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Heure</TableHead>
                    <TableHead>Usager</TableHead>
                    <TableHead>Démarche</TableHead>
                    <TableHead className="text-right">Statut</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ROWS.map((row) => (
                    <TableRow key={row.time}>
                        <TableCell className="tabular-nums">{row.time}</TableCell>
                        <TableCell className="font-medium">{row.name}</TableCell>
                        <TableCell>{row.service}</TableCell>
                        <TableCell className="text-right">
                            <Badge variant={TONE[row.status as keyof typeof TONE]}>{row.status}</Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
