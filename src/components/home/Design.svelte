<script lang="ts">
	import { generateSlug } from "../../utils/format";

	export let model: string;
</script>

<article class="grid grid-flow-row text-center items-center gap-1 lg:gap-2">
	<slot />
	<h3 class="md:text-xl">{model}</h3>
	<a
		href={`/${generateSlug(model)}`}
		class="text-xs underline underline-offset-6 font-bold md:text-sm">Start Designing</a
	>
</article>
