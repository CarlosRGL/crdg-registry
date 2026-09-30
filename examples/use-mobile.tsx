'use client';

import { useIsMobile } from '@/hooks/use-mobile';

export default function UseMobileExample() {
    const isMobile = useIsMobile();

    return (
        <p>
            Current window: <strong>{isMobile ? 'mobile (< 768 px)' : 'desktop'}</strong>. Resize to see the value change.
        </p>
    );
}
