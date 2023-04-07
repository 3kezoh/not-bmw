import type { Source } from "../types/image";

export function getSrcset(sources: Source[]) {
	return sources.map(({ src, width }) => `${src} ${width}w`).join(", ");
}
