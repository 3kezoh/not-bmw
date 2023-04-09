import type { Picture } from "vite-imagetools";
import type { Metadata } from "./types/image";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	module "*&picture" {
		const picture: Picture;

		export = picture;
	}

	module "*&format=avif;webp;jpg&meta=format;height;src;width" {
		const metadata: Metadata[];

		export = metadata;
	}
}

export {};
