<script lang="ts">
	import PrimaryDescription from "../../../components/primaryDescription.svelte";
	import TechnicalSpecList from "../../../components/technicalSpecList.svelte";
	import type { Car } from "../../../types/car.type";
    import Carousel from "../../../components/SvelteCarousel.svelte";

	export let data: { car?: Car } = {};

	const { car } = data;
	const technicalSpecs = car
		? [
				{ title: "Energy", value: car.energyEngine },
				{ title: "Power", value: car.power },
				{ title: "Acceleration", value: car.acceleration },
				{ title: "Transmission", value: car.transmission },
				{ title: "Consumption", value: car.consumption },
				{ title: "Carbon Emission", value: car.carbonEmission },
				{ title: "Energy Label", value: car.energyLabel }
		  ]
		: [];
</script>

{#if car}
	<h1>car n°{car.id}</h1>
	<PrimaryDescription
		model={car.model}
		year={car.year}
		price={car.price}
		dealerName={car.dealer.name}
	/>
    <Carousel images={car.media.images} />

    <h1>Technical Specifications</h1>
    <TechnicalSpecList specs={technicalSpecs} />
{/if}

<h1>From Outside</h1>
