/**
 * URL publique du site. Le registre est servi sous `${SITE_URL}/r/{name}.json`.
 * À surcharger par NEXT_PUBLIC_REGISTRY_URL (Vercel : variable d'environnement du projet).
 */
export const SITE_URL = (
    process.env.NEXT_PUBLIC_REGISTRY_URL ?? 'https://crdg-registry.vercel.app'
).replace(/\/$/, '');

export const REGISTRY_URL = `${SITE_URL}/r/{name}.json`;

export const REPOSITORY_URL = 'https://github.com/CarlosRGL/crdg-registry';
