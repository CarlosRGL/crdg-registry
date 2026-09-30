'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { REPOSITORY_URL } from '@/lib/config';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
            <div className="mx-auto flex h-topbar max-w-screen-2xl items-center gap-2 px-4">
                <MobileNav />
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <span className="flex size-6 items-center justify-center rounded-md bg-primary text-xs text-primary-foreground">
                        cr
                    </span>
                    @crdg
                    <span className="hidden font-normal text-muted-foreground sm:inline">shadcn registry</span>
                </Link>
                <div className="ml-auto flex items-center gap-1">
                    <Button variant="ghost" size="sm" className="max-sm:hidden" nativeButton={false} render={<Link href="/installation" />}>
                        Installation
                    </Button>
                    <Button variant="ghost" size="sm" className="max-sm:hidden" nativeButton={false} render={<Link href="/docs/button" />}>
                        Components
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        nativeButton={false}
                        render={<a href={REPOSITORY_URL} target="_blank" rel="noreferrer" />}
                    >
                        GitHub
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
