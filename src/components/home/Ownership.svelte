<script lang="ts">
	export let heading: string;
	export let content: string;
	export let cta: string;
</script>

<article class="grid grid-flow-row gap-2 justify-items-center text-center md:gap-4">
	<slot />
	<h3 class="font-bold md:text-xl">{heading}</h3>
	<p class="text-sm md:text-base">{content}</p>
	<button class="underline underline-offset-6 font-bold grid grid-flow-col gap-1">
		<span class="text-xs md:text-sm">{cta}</span>
		<svg class="h-4 stroke-raisin-black stroke-4 fill-none" viewBox="0 0 24 24">
			<path d="M7 17L17 7" />
			<path d="M7 7h10v10" />
		</svg>
	</button>
</article>
