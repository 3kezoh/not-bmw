<script lang="ts">
	import { getPicture } from "$lib/getPicture";
	import { getSrcset } from "$lib/getSrcset";
	import type { Metadata, Source } from "../types/image";
	import Sources from "./Sources.svelte";

	export let alt: string;
	export let desktopMetadata: Metadata[];
	export let isLazyLoaded = true;
	export let media: string;
	export let mobileMetadata: Metadata[];
	export let sizes: string;

	$: desktopPicture = getPicture(desktopMetadata);
	$: mobilePicture = getPicture(mobileMetadata);
	$: fallback = getFallback(desktopPicture.fallbacks);
	$: srcset = getSrcset([...desktopPicture.fallbacks, ...mobilePicture.fallbacks]);

	function getFallback(sources: Source[]) {
		const [fallback] = sources;

		if (!fallback) {
			return;
		}

		const { height, width } = fallback;

		return {
			...fallback,
			height: Math.round(height),
			width: Math.round(width)
		};
	}
</script>

<picture>
	<Sources sources={mobilePicture.sources} {sizes} {media} />
	<Sources sources={desktopPicture.sources} {sizes} />
	<img
		{alt}
		{sizes}
		{srcset}
		{...fallback}
		loading={isLazyLoaded ? "lazy" : undefined}
		{...$$restProps}
	/>
</picture>
