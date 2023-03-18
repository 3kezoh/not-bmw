<script lang="ts">
	import PrimaryDescription from "../../../components/primaryDescription.svelte";
	import TechnicalSpec from "../../../components/technicalSpec.svelte";

	/** @type {import('./$types').PageData} */
	export let data: any;

	const model = data.car?.model;
	const price = data.car?.price;
	const year = data.car?.year;
	const media = data.car?.media;
	const videoPath = data.car?.videoPath;
	const dealerName = data.car?.dealer.name;
	const dealerAddress = data.car?.dealer.address;
	const energyEngine = data.car?.energyEngine;
	const power = data.car?.power;
	const acceleration = data.car?.acceleration;
	const transmission = data.car?.transmission;
	const consumption = data.car?.consumption;
	const carbonEmission = data.car?.carbonEmission;
	const energyLabel = data.car?.energyLabel;
</script>

<h1>cars</h1>

<div />
<PrimaryDescription props={{ model, year, price, dealerName }} />

<h1>Technical Specifications</h1>
<TechnicalSpec props={{ titleSpec: "Energy", valueSpec: energyEngine }} />
<TechnicalSpec props={{ titleSpec: "Power", valueSpec: power }} />
<TechnicalSpec props={{ titleSpec: "Acceleration", valueSpec: acceleration }} />
<TechnicalSpec props={{ titleSpec: "Transmission", valueSpec: transmission }} />
<TechnicalSpec props={{ titleSpec: "Consumption", valueSpec: consumption }} />
<TechnicalSpec props={{ titleSpec: "Carbon Emission", valueSpec: carbonEmission }} />
<TechnicalSpec props={{ titleSpec: "Energy Label", valueSpec: energyLabel }} />

<h1>From Outside</h1>
