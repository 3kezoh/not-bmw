<script lang="ts">
	import Subtitles from "./products/Subtitles.svelte";

	export let specs: { title: string; value: number | string }[];
</script>

<div>
	<h1>Technical Specifications</h1>
	{#each specs as spec}
		<Subtitles title={spec.title} subtitle={spec.value.toString()}/>
	{/each}
</div>
