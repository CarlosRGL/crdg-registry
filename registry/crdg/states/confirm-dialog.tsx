'use client';

import { useRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

/**
 * Confirmation d'une action destructive ou coûteuse à défaire (plan 049) : titre en question, conséquence en une
 * phrase, « Annuler » reçoit le focus à l'ouverture pour qu'une frappe sur Entrée ne détruise
 * rien. Bâti sur `AlertDialog` (`role="alertdialog"`, pas de fermeture au clic extérieur).
 * `onConfirm` lance la requête (`router.delete`…) ; le dialogue se ferme quand la page
 * appelante repasse `open` à `false`, typiquement dans `onSuccess`.
 */
export default function ConfirmDialog({
    open,
    onOpenChange,
    title,
    description,
    confirmLabel,
    onConfirm,
    processing = false,
    destructive = true,
    trigger,
    children,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: ReactNode;
    confirmLabel: string;
    onConfirm: () => void;
    processing?: boolean;
    /** `false` pour une confirmation coûteuse mais non destructive (bouton principal). */
    destructive?: boolean;
    /** Déclencheur optionnel, passé en `render` du déclencheur : un seul élément. */
    trigger?: ReactElement;
    /** Contenu complémentaire entre la description et les boutons (motif, case à cocher). */
    children?: ReactNode;
}) {
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            {trigger && <AlertDialogTrigger render={trigger} />}
            <AlertDialogContent initialFocus={cancelRef}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                {children}
                <AlertDialogFooter>
                    <AlertDialogCancel ref={cancelRef} variant="secondary">
                        Annuler
                    </AlertDialogCancel>
                    <AlertDialogAction
                        variant={destructive ? 'destructive' : 'default'}
                        loading={processing}
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
