'use client';

import { ArrowRightIcon, PlusIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const VARIANTS = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const;

export default function ButtonExample() {
    const [loading, setLoading] = useState(false);

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
                {VARIANTS.map((variant) => (
                    <Button key={variant} variant={variant}>
                        {variant}
                    </Button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <Button size="xs">Très petit</Button>
                <Button size="sm">Petit</Button>
                <Button>Normal</Button>
                <Button size="lg">Grand</Button>
                <Button size="icon" variant="outline" aria-label="Ajouter">
                    <PlusIcon />
                </Button>
                <Button size="icon-sm" variant="destructive" aria-label="Supprimer">
                    <Trash2Icon />
                </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <Button variant="outline">
                    <PlusIcon data-icon="inline-start" />
                    Nouveau rendez-vous
                </Button>
                <Button
                    loading={loading}
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => setLoading(false), 1500);
                    }}
                >
                    Enregistrer
                </Button>
                <Button disabled>Désactivé</Button>
                <Button variant="link" nativeButton={false} render={<a href="#" />}>
                    Lien
                    <ArrowRightIcon data-icon="inline-end" />
                </Button>
            </div>
        </div>
    );
}
