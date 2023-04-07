<script lang="ts">
	import { getSrcset } from "$lib/getSrcset";
	import type { Source, Sources } from "../types/image";

	export let sources: Sources;
	export let sizes: string;
	export let media = "";

	$: sourcesEntries = Object.entries(sources);

	$: sourcesProps = sourcesEntries.map(([format, sources]) => {
		const srcset = getSrcset(sources);
		const type = "image/" + format;

		return {
			srcset,
			type
		};
	});

	$: intrinsicSize = getIntrinsicSize(sourcesEntries);

	function getIntrinsicSize(sourcesEntries: [string, Source[]][]) {
		const [sourcesEntry] = sourcesEntries;

		const fallback = {
			width: 0,
			height: 0
		};

		if (!sourcesEntry) {
			return fallback;
		}

		const [, [source]] = sourcesEntry;

		if (!source) {
			return fallback;
		}

		const { width, height } = source;

		return {
			width: Math.round(width),
			height: Math.round(height)
		};
	}
</script>

{#each sourcesProps as { srcset, type }}
	<source {srcset} {type} {sizes} media={media || undefined} {...intrinsicSize} />
{/each}
