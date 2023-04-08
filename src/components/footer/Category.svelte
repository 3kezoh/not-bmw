<script lang="ts">
	import type { ComponentProps } from "svelte";
	import Topic from "./Topic.svelte";

	export let heading: string;
	export let topics: ComponentProps<Topic>[];
</script>

<div class="grid gap-4 grid-flow-row md:gap-10">
	<div class="text-xs tracking-widest">{heading}</div>
	<div class="grid gap-4 md:grid-cols-2">
		{#each topics as topic}
			<Topic {...topic} />
		{/each}
	</div>
</div>
