'use client';

import { useIsMobile } from '@/hooks/use-mobile';

export default function UseMobileExample() {
    const isMobile = useIsMobile();

    return (
        <p>
            Fenêtre actuelle : <strong>{isMobile ? 'mobile (< 768 px)' : 'bureau'}</strong>. Redimensionnez pour voir la valeur changer.
        </p>
    );
}
