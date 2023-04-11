<script lang="ts">
	import Subtitles from "./products/Subtitles.svelte";

	export let specs: { title: string; value: number | string }[];
</script>

<div>
	<div class="font-bold text-2xl pb-2 text-center">Technical Specifications</div>
	<div class="grid grid-cols-3 border-t-2">
	{#each specs as spec}
		<Subtitles title={spec.title} subtitle={spec.value.toString()}/>
	{/each}
	</div>
</div>
