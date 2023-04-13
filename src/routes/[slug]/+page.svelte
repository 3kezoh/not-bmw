<script lang="ts">
	import PrimaryDescription from "../../components/primaryDescription.svelte";
	import TechnicalSpecList from "../../components/technicalSpecList.svelte";
	import RadioButton from "../../components/products/RadioButton.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { car, video, image } = data;

	const technicalSpecs = [
		{ title: "Energy", value: car.energyEngine },
		{ title: "Power", value: car.power + " ch" },
		{ title: "Acceleration", value: car.acceleration + " sec" },
		{ title: "Transmission", value: car.transmission },
		{ title: "Consumption", value: car.consumption + " l/100km" },
		{ title: "Carbon Emission", value: car.carbonEmission + " g/km" }
	];
</script>

<div class="mt-16 gap-y-20 gap-x-10 p-10 lg:mt-24 lg:grid lg:grid-cols-2">
	<PrimaryDescription
		model={car.model}
		drive={car.drive}
		acceleration={car.acceleration}
		transmission={car.transmission}
		price={car.price}
		dealerName={car.dealer.name}
		{image}
	/>
	<RadioButton acceleration={car.acceleration} price={car.price} />
	<TechnicalSpecList specs={technicalSpecs} />
</div>

{#if video}
	<div class="hidden bg-black p-24 lg:block">
		<h2 class="text-center text-2xl font-bold text-white">DISCOVER THE ELECTRIC THRILL</h2>
		<svelte:component this={video} />
	</div>
{/if}
