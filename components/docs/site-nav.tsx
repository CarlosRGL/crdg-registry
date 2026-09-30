'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories, titleOf } from '@/lib/registry';
import { cn } from '@/lib/utils';

const GUIDES = [
    { href: '/', label: 'Loniar theme' },
    { href: '/installation', label: 'Installation' },
];

function NavLink({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate?: () => void }) {
    const active = usePathname() === href;

    return (
        <Link
            href={href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={cn(
                'block rounded-md px-2 py-1 text-sm text-fg-2 transition-colors hover:bg-accent hover:text-foreground',
                active && 'bg-card font-medium text-foreground shadow-xs ring-1 ring-border',
            )}
        >
            {children}
        </Link>
    );
}

export function SiteNav({ onNavigate }: { onNavigate?: () => void }) {
    return (
        <nav aria-label="Documentation" className="flex flex-col gap-5">
            <div className="flex flex-col gap-0.5">
                <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">Getting started</p>
                {GUIDES.map((guide) => (
                    <NavLink key={guide.href} href={guide.href} onNavigate={onNavigate}>
                        {guide.label}
                    </NavLink>
                ))}
            </div>
            {categories.map((category) => (
                <div key={category.slug} className="flex flex-col gap-0.5">
                    <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">
                        {category.label} <span className="text-fg-4">{category.items.length}</span>
                    </p>
                    {category.items.map((item) => (
                        <NavLink key={item.name} href={`/docs/${item.name}`} onNavigate={onNavigate}>
                            {titleOf(item)}
                        </NavLink>
                    ))}
                </div>
            ))}
        </nav>
    );
}
