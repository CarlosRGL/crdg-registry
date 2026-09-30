import type { Metadata } from 'next';
import { SiteHeader } from '@/components/docs/site-header';
import { SiteNav } from '@/components/docs/site-nav';
import { Providers } from '@/components/docs/providers';
import './globals.css';

export const metadata: Metadata = {
    title: { default: '@crdg — shadcn registry', template: '%s · @crdg' },
    description: 'The loniar theme and Base UI components for shadcn, ready to install.',
};

// Applies the theme before hydration (same key as @crdg/use-appearance): no flash.
const THEME_SCRIPT = `try{var a=localStorage.getItem('appearance')||'system';var d=a==='dark'||(a==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
            </head>
            <body className="min-h-dvh">
                <Providers>
                    <SiteHeader />
                    <div className="mx-auto flex max-w-screen-2xl">
                        <aside className="sticky top-topbar hidden h-[calc(100dvh-var(--spacing-topbar))] w-60 shrink-0 overflow-y-auto border-r px-3 py-6 md:block">
                            <SiteNav />
                        </aside>
                        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-12">{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
