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

	.gallery::-webkit-scrollbar {
		width: 10px;
		height: 10px;
		background-color: #f2f2f2;
	}

	.gallery::-webkit-scrollbar-thumb {
		background-color: #0066b1;
		border-radius: 10px;
	}

	.gallery::-webkit-scrollbar-thumb:hover {
		background-color: #666666;
	}
</style>
