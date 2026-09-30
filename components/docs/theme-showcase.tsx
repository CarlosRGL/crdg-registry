import { items } from '@/lib/registry';
import { ExamplePreview } from '@/examples';

type CssVars = { theme: Record<string, string>; light: Record<string, string>; dark: Record<string, string> };

const cssVars = (items.find((item) => item.name === 'loniar-theme') as unknown as { cssVars: CssVars }).cssVars;

const COLOR_GROUPS: { label: string; tokens: string[] }[] = [
    { label: 'Surfaces', tokens: ['background', 'card', 'popover', 'surface-2', 'surface-3', 'sunken', 'muted', 'accent', 'secondary', 'sidebar'] },
    { label: 'Text', tokens: ['foreground', 'fg-2', 'fg-3', 'fg-4', 'muted-foreground'] },
    { label: 'Accent and borders', tokens: ['primary', 'primary-soft', 'primary-line', 'ring', 'border', 'border-strong', 'input', 'divider'] },
    { label: 'Statuses', tokens: ['success', 'success-muted', 'warning', 'warning-muted', 'info', 'info-muted', 'destructive', 'destructive-soft'] },
    { label: 'Tones', tokens: Object.keys(cssVars.light).filter((name) => name.startsWith('tone-')) },
];

const TEXT_SIZES = Object.keys(cssVars.theme)
    .filter((name) => name.startsWith('text-') && !name.includes('--'))
    .map((name) => name.slice('text-'.length));

const RADII = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'];
const SHADOWS = ['xs', 'sm', 'md', 'lg', 'xl', 'card', 'pop', 'drag'];

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <div className="space-y-1">
                <h2 className="text-lg font-semibold">{title}</h2>
                {description && <p className="text-fg-2">{description}</p>}
            </div>
            {children}
        </section>
    );
}

export function ThemeShowcase() {
    return (
        <div className="space-y-12">
            <Section title="Mode" description="The .dark variables override those of :root; the choice is persisted by @crdg/use-appearance.">
                <div className="flex justify-start">
                    <ExamplePreview name="use-appearance" />
                </div>
            </Section>

            <Section title="Palette" description="Each swatch reads its CSS variable, so it follows the active mode. Light / dark values below.">
                {COLOR_GROUPS.map((group) => (
                    <div key={group.label} className="space-y-2">
                        <h3 className="text-xs font-medium text-muted-foreground">{group.label}</h3>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                            {group.tokens
                                .filter((token) => token in cssVars.light)
                                .map((token) => (
                                    <div key={token} className="overflow-hidden rounded-lg border bg-card">
                                        <div className="h-12 border-b" style={{ background: `var(--${token})` }} />
                                        <div className="space-y-0.5 px-2 py-1.5">
                                            <p className="font-mono text-xs font-medium">--{token}</p>
                                            <p className="truncate font-mono text-2xs text-muted-foreground">
                                                {cssVars.light[token]} / {cssVars.dark[token] ?? '—'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </Section>

            <Section title="Typography" description="Geist Variable, dense scale: text-sm is 13.5px and is the default body size.">
                <div className="divide-y rounded-lg border bg-card">
                    {TEXT_SIZES.map((size) => (
                        <div key={size} className="flex items-baseline gap-4 px-4 py-2.5">
                            <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">
                                text-{size}
                                <br />
                                {cssVars.theme[`text-${size}`]} / {cssVars.theme[`text-${size}--line-height`]}
                            </span>
                            <span style={{ fontSize: `var(--text-${size})`, lineHeight: `var(--text-${size}--line-height)` }}>
                                Book an appointment at city hall
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Radii" description={`Derived from --radius (${cssVars.light.radius}).`}>
                <div className="flex flex-wrap gap-4">
                    {RADII.map((radius) => (
                        <div key={radius} className="flex flex-col items-center gap-1.5">
                            <div
                                className="size-16 border-2 border-primary bg-primary-soft"
                                style={{ borderRadius: `var(--radius-${radius})` }}
                            />
                            <span className="font-mono text-xs text-muted-foreground">rounded-{radius}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Shadows" description="Warm shadows, tinted with the brown of the neutrals rather than black.">
                <div className="grid grid-cols-2 gap-6 rounded-xl bg-sunken p-6 sm:grid-cols-4">
                    {SHADOWS.map((shadow) => (
                        <div
                            key={shadow}
                            className="flex h-20 items-center justify-center rounded-lg bg-card font-mono text-xs text-muted-foreground"
                            style={{ boxShadow: `var(--shadow-${shadow})` }}
                        >
                            shadow-{shadow}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
