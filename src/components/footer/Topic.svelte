<script lang="ts">
	import Links from "./Links.svelte";

	export let heading: string;
	export let links: string[];
</script>

<div class="grid gap-10 md:h-fit">
	<div class="text-sm md:text-base font-bold grid grid-flow-col items-center">
		<span>{heading}</span>
		<svg
			viewBox="0 0 24 24"
			class="h-6 w-6 fill-none stroke-2 stroke-raisin-black justify-self-end md:hidden"
		>
			<path d="M12 5v14" />
			<path d="M5 12h14" />
		</svg>
	</div>
	<ul class="hidden md:grid md:gap-4 md:text-sm md:h-fit">
		<Links {links} />
	</ul>
</div>
