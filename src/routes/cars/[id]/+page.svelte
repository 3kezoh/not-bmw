<script lang="ts">
	import PrimaryDescription from "../../../components/primaryDescription.svelte";
	import TechnicalSpecList from "../../../components/technicalSpecList.svelte";
	import type { Car } from "../../../types/car.type";

	export let data: { car?: Car } = {};

	const { car } = data;
	const technicalSpecs = car
		? [
				{ title: "Energy", value: car.energyEngine },
				{ title: "Power", value: car.power },
				{ title: "Acceleration", value: car.acceleration },
				{ title: "Transmission", value: car.transmission },
				{ title: "Consumption", value: car.consumption },
				{ title: "Carbon Emission", value: car.carbonEmission }
		  ]
		: [];
</script>

<div class="mt-16 lg:mt-24 grid grid-cols-2 gap-2 gap-y-20 p-10">
	{#if car}
	<PrimaryDescription
		model={car.model}
		drive={car.drive}
		acceleration={car.acceleration}
		transmission={car.transmission}
		price={car.price}
		dealerName={car.dealer.name}
	/>
	<div></div>
	<div class="col-span-2">
		<TechnicalSpecList specs={technicalSpecs} />
	</div>

	<div class="col-span-2">
		<div class="font-bold text-2xl text-center">Vidéo</div>
	</div>
	
{/if}
</div> 