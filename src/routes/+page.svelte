<script lang="ts">
	import Series from "../components/home/Series.svelte";
	import Designs from "../components/home/Designs.svelte";
	import Ownerships from "../components/home/Ownerships.svelte";
	import Cars from "../components/home/Cars.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<div class="snap-y snap-mandatory h-d-screen overflow-scroll">
	<Cars />
	<div class="snap-start snap-always">
		<Designs />
		<Series />
		<Ownerships />
		<Footer />
	</div>
</div>
