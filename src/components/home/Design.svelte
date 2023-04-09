<script lang="ts">
	export let model: string;
</script>

<article class="grid grid-flow-row text-center items-center gap-1 lg:gap-2">
	<slot />
	<h3 class="md:text-xl">{model}</h3>
	<button class="text-xs underline underline-offset-6 font-bold md:text-sm"
		>Start Designing</button
	>
</article>
