<script lang="ts">
	import type { Images } from "../types/car.type";

	export let images: Images[];

	const imagesArray = images.map((image) => image.path);

	let currentImage = 0;

	const nextImage: () => void = () => {
		if (currentImage !== imagesArray.length - 1) {
			currentImage++;
		}
	};

	const previousImage: () => void = () => {
		if (currentImage !== 0) {
			currentImage--;
		}
	};

	const goToImage: (index: number) => void = (index) => {
		currentImage = index;
	};
</script>

<div>
	<img src={imagesArray[currentImage]} alt="" />
	<button on:click={previousImage}>Previous</button>
	<button on:click={nextImage}>Next</button>
	<div>
		{#each imagesArray as image, index}
			<button on:click={() => goToImage(index)}>{index}</button>
		{/each}
	</div>
</div>