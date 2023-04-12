<script lang="ts">
	import Subtitles from "./products/Subtitles.svelte";

	export let specs: { title: string; value: number | string }[];
</script>

<div class="col-span-2">
	<div class="pb-2 text-center text-2xl font-bold">Technical Specifications</div>
	<div class="grid grid-cols-2 border-t-2 lg:grid-cols-3">
		{#each specs as spec}
			<Subtitles title={spec.title} subtitle={spec.value.toString()} />
		{/each}
	</div>
</div>
