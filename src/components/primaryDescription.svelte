<script lang="ts">
	import { formatPrice } from "../utils/format";
	import Subtitles from "./products/Subtitles.svelte";

	export let model: string;
	export let drive: string;
	export let transmission: string;
	export let acceleration: number;
	export let price: number;
	export let dealerName: string;
	export let image: string;
</script>

<div>
	<div class="font-mono text-xs">2023 MODEL YEAR ------</div>
	<h1 class="text-3xl font-bold">{model}</h1>

	<svelte:component this={image} />

	<div class="grid grid-cols-1 border-t-2 border-b-2 lg:grid-cols-3 lg:border-t-0">
		<Subtitles title={drive} subtitle="Drivetrain" />
		<Subtitles title={transmission} subtitle="Transmission" />
		<Subtitles title="{acceleration} sec" subtitle="0-60 MPH" />
	</div>

	<div class="mt-5">
		<div class="text-2xl font-bold">{formatPrice(price)}</div>
		<div class="text-sm">Starting Price at {dealerName}</div>
	</div>
</div>
