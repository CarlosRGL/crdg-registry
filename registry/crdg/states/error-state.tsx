import type { LucideIcon } from 'lucide-react';
import {
    FileQuestion,
    Lock,
    RotateCcw,
    ServerCrash,
    WifiOff,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import EmptyState from './empty-state';

export type ErrorKind = 'offline' | 'failed' | 'forbidden' | 'not-found';

const COPY: Record<
    ErrorKind,
    { icon: LucideIcon; title: string; description: string }
> = {
    offline: {
        icon: WifiOff,
        title: 'Vous êtes hors ligne',
        description:
            'Vérifiez votre connexion. La page se rechargera dès que le réseau sera revenu.',
    },
    failed: {
        icon: ServerCrash,
        title: 'Un problème est survenu',
        description:
            "Cette vue n'a pas pu être chargée. Vos données sont intactes.",
    },
    forbidden: {
        icon: Lock,
        title: "Vous n'avez pas accès",
        description:
            "Vos droits ne permettent pas d'afficher cette page. Rapprochez-vous de l'administrateur de votre commune.",
    },
    'not-found': {
        icon: FileQuestion,
        title: 'Page introuvable',
        description:
            "Cette page a été déplacée, archivée, ou n'a jamais existé.",
    },
};

/**
 * État d'erreur (plan 049) : même composition qu'un état vide, icône en brique, texte qui
 * rassure et dit quoi faire. `onRetry` ajoute « Réessayer » ; `actions` remplace les actions.
 */
export default function ErrorState({
    kind,
    title,
    description,
    onRetry,
    actions,
    className,
}: {
    kind: ErrorKind;
    title?: string;
    description?: ReactNode;
    onRetry?: () => void;
    actions?: ReactNode;
    className?: string;
}) {
    const copy = COPY[kind];

    return (
        <EmptyState
            icon={copy.icon}
            tone={kind === 'not-found' ? 'default' : 'destructive'}
            title={title ?? copy.title}
            description={description ?? copy.description}
            className={className}
            actions={
                actions ??
                (onRetry && (
                    <Button variant="outline" onClick={onRetry}>
                        <RotateCcw aria-hidden="true" />
                        Réessayer
                    </Button>
                ))
            }
        />
    );
}
