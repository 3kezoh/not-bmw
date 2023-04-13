<script lang="ts">
	import { generateSlug } from "../../utils/format";

	export let heading: string;
	export let model: string;
</script>

<article class="font-bold snap-start snap-normal h-d-screen grid grid-rows-[auto_1fr] relative">
	<div class="relative h-fit">
		<div
			class="absolute left-1/2 -translate-x-1/2 top-28 md:top-[20%] drop-shadow-nav text-white p-3"
		>
			<h2 class="text-3xl whitespace-nowrap md:text-5xl">
				{@html heading}
			</h2>
			<p class="text-lg whitespace-nowrap md:text-2xl">
				The 2023 BMW {model}
			</p>
		</div>
		<slot />
	</div>
	<div
		class="text-sm grid content-center justify-center grid-flow-row gap-4 md:grid-flow-col md:absolute md:bottom-[10%] md:left-1/2 md:-translate-x-1/2"
	>
		<a
			href={`/${generateSlug(model)}`}
			class="inline-block text-center h-fit bg-honolulu-blue text-white rounded-sm w-64 py-3"
		>
			Build Yours
		</a>
		<a
			href={`/${generateSlug(model)}`}
			class="inline-block text-center h-fit bg-raisin-black text-white rounded-sm w-64 py-3"
			aria-label={`Learn more about the BMW ${model}`}>Learn More</a
		>
	</div>
</article>
