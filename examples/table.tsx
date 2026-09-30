'use client';

import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ROWS = [
    { time: '09:00', name: 'Alice Martin', service: 'Passport', status: 'Confirmed' },
    { time: '09:20', name: 'Bruno Petit', service: "ID card", status: 'Pending' },
    { time: '09:40', name: 'Chloe Durand', service: 'Passport', status: 'Cancelled' },
];

const TONE = { Confirmed: 'success', Pending: 'warning', Cancelled: 'destructive' } as const;

export default function TableExample() {
    return (
        <Table>
            <TableCaption>Appointments for Tuesday, October 6</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Resident</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead className="text-right">Status</TableHead>
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
