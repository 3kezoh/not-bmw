<script lang="ts">
	import type { Images } from "../types/car.type";

	export let images: Images[];
</script>

<div class="wrapper">
	<div class="gallery scroll-x scroll-mandatory snap-x snap-mandatory">
		{#each images as image}
			<img class="snap-center snap-always" src={image.path} alt="" />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		height: 250px;
		width: 400px;
		margin-bottom: 20px;
	}

	.gallery {
		display: flex;
		flex-direction: row;
		overflow: scroll;
		overflow-y: hidden;
	}

	img {
		max-height: 100%;
		object-fit: cover;
		margin-right: 10px;
	}
</style>
