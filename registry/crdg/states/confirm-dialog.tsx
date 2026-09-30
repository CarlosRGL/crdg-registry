import { useRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

/**
 * Confirmation d'une action destructive ou coûteuse à défaire (plan 049) : titre en question, conséquence en une
 * phrase, « Annuler » reçoit le focus à l'ouverture pour qu'une frappe sur Entrée ne détruise
 * rien. `onConfirm` lance la requête (`router.delete`…) ; le dialogue se ferme quand la page
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
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger render={trigger} />}
            <DialogContent initialFocus={cancelRef}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter>
                    <DialogClose
                        ref={cancelRef}
                        render={<Button variant="secondary" />}
                    >
                        Annuler
                    </DialogClose>
                    <Button
                        variant={destructive ? 'destructive' : 'default'}
                        loading={processing}
                        onClick={onConfirm}
                    >
                        {confirmLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
