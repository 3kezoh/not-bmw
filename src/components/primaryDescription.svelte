<script lang="ts">
	import Subtitles from "./products/Subtitles.svelte";
	import BmwIx from "./products/pictures/BmwIx.svelte";

	export let model: string;
	export let drive: string;
	export let transmission: string;
	export let acceleration: number;
	export let price: number;
	export let dealerName: string;
</script>

<div>
	<div class="text-xs font-mono">2023 MODEL YEAR ------</div>
	<h1 class="font-bold text-3xl">{model}</h1>
	<BmwIx />
	
	<div class="grid grid-cols-3 border-t-2 border-b-2">
		<Subtitles title="{drive}" subtitle="Drivetrain" />
		<Subtitles title="{transmission}" subtitle="Transmission" />
		<Subtitles title="{acceleration} sec" subtitle="0-60 MPH" />
	</div>
	
	<div class="mt-5">
			<div class="text-2xl font-bold">{price.toLocaleString( 'en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 } )}</div>
			<div class="text-sm">Starting Price at {dealerName}</div>
	</div>
</div>

