<script lang="ts">
	import PrimaryDescription from "../../../components/primaryDescription.svelte";
	import TechnicalSpecList from "../../../components/technicalSpecList.svelte";
	import RadioButton from "../../../components/products/RadioButton.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { car } = data;

	const technicalSpecs = [
		{ title: "Energy", value: car.energyEngine },
		{ title: "Power", value: car.power },
		{ title: "Acceleration", value: car.acceleration },
		{ title: "Transmission", value: car.transmission },
		{ title: "Consumption", value: car.consumption },
		{ title: "Carbon Emission", value: car.carbonEmission }
	];
</script>

<div class="mt-16 p-10 lg:mt-24 lg:grid lg:grid-cols-2 gap-y-20 gap-x-10">
	<PrimaryDescription
		model={car.model}
		drive={car.drive}
		acceleration={car.acceleration}
		transmission={car.transmission}
		price={car.price}
		dealerName={car.dealer.name}
	/>
	<RadioButton acceleration={car.acceleration} price={car.price} />
	<TechnicalSpecList specs={technicalSpecs} />
</div>

{#if car.media.video}
	{#await import(`../../../components/products/videos/${car?.media.video}.svelte`) then value}
		<div class="hidden lg:block p-24">
			<svelte:component this={value.default} />
		</div>
	{/await}
{/if}
