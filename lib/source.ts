import 'server-only';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

function read(file: string): string | null {
    return existsSync(file) ? readFileSync(file, 'utf8') : null;
}

/** Distributed file, path as declared in registry.json (`registry/crdg/...`). */
export function readSource(registryPath: string): string | null {
    return read(path.join(process.cwd(), 'registry', registryPath.replace(/^registry\//, '')));
}

export function readExample(name: string): string | null {
    return read(path.join(process.cwd(), 'examples', `${name}.tsx`));
}
