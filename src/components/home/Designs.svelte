<script>
	import Design from "./Design.svelte";
	import Bmw3 from "./pictures/Bmw3.svelte";
	import Bmw5 from "./pictures/Bmw5.svelte";
	import BmwX3 from "./pictures/BmwX3.svelte";
	import BmwX5 from "./pictures/BmwX5.svelte";
</script>

<section
	class="bg-cultured grid gap-12 px-4 py-20 justify-items-center items-center lg:gap-20 lg:px-20 lg:py-32"
>
	<h2 class="text-lg text-center md:text-3xl">Build the BMW of your dreams.</h2>
	<div
		class="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-12 self-baseline lg:grid-rows-1 lg:grid-cols-4 lg:gap-x-12"
	>
		<Design model="3 Series Sedan">
			<Bmw3 />
		</Design>
		<Design model="X3">
			<BmwX3 />
		</Design>
		<Design model="5 Series Sedan">
			<Bmw5 />
		</Design>
		<Design model="X5">
			<BmwX5 />
		</Design>
	</div>
	<button class="bg-raisin-black text-white font-bold py-3 px-8 w-fit text-sm"
		>Build Your Own
	</button>
</section>
