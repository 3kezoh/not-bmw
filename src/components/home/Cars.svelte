<script>
	import Car from "./Car.svelte";
	import BmwIx from "./pictures/BmwIx.svelte";
	import BmwX7 from "./pictures/BmwX7.svelte";
	import BmwXm from "./pictures/BmwXm.svelte";
	import BmwZ4 from "./pictures/BmwZ4.svelte";
</script>

<Car heading={"ELECTRIC<br />INNOVATION"} model="iX">
	<BmwIx />
	<svg
		viewBox="0 0 24 24"
		class="left-1/2 -translate-x-1/2 absolute bottom-6 fill-none stroke-white stroke-2 h-8"
	>
		<path d="M6 9l6 6 6-6" />
	</svg>
</Car>
<Car heading={"POWERFUL<br />PERFORMANCE"} model="XM">
	<BmwXm />
</Car>
<Car heading={"NEXT-LEVEL<br />LUXURY"} model="X7">
	<BmwX7 />
</Car>
<Car heading={"PUREBRED<br />ROADSTER"} model="Z4">
	<BmwZ4 />
</Car>
