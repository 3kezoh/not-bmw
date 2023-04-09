<script lang="ts">
	import { getPicture } from "$lib/getPicture";
	import { getSrcset } from "$lib/getSrcset";
	import type { Metadata } from "../types/image";
	import Sources from "./Sources.svelte";

	export let alt: string;
	export let isLazyLoaded = true;
	export let metadata: Metadata[];
	export let sizes: string;

	$: picture = getPicture(metadata);
	$: [fallback] = picture.fallbacks;
	$: srcset = getSrcset(picture.fallbacks);
</script>

<picture>
	<Sources sources={picture.sources} {sizes} />
	<img
		{alt}
		{sizes}
		{srcset}
		{...fallback}
		loading={isLazyLoaded ? "lazy" : undefined}
		{...$$restProps}
	/>
</picture>
