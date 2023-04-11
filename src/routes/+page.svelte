<script lang="ts">
	import Series from "../components/home/Series.svelte";
	import Designs from "../components/home/Designs.svelte";
	import Ownerships from "../components/home/Ownerships.svelte";
	import Cars from "../components/home/Cars.svelte";
</script>

<div class="snap-y snap-mandatory">
	<Cars />
	<div class="snap-start snap-always">
		<Designs />
		<Series />
		<Ownerships />
	</div>
</div>
