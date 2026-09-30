/**
 * Public site URL. The registry is served under `${SITE_URL}/r/{name}.json`.
 * Override with NEXT_PUBLIC_REGISTRY_URL (on Vercel: a project environment variable).
 */
export const SITE_URL = (
    process.env.NEXT_PUBLIC_REGISTRY_URL ?? 'https://crdg-registry.vercel.app'
).replace(/\/$/, '');

export const REGISTRY_URL = `${SITE_URL}/r/{name}.json`;

export const REPOSITORY_URL = 'https://github.com/CarlosRGL/crdg-registry';
