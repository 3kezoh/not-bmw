<script lang="ts">
	import { formatPrice } from "../../utils/format";
	import Radio from "./Radio.svelte";

	export let acceleration: number;
	export let price: number;
</script>

<div class="grid grid-rows-4 text-center">
	<div class="grid grid-cols-3 items-end font-semibold">
		<div />
		<div>0-60 MPH</div>
		<div>Price</div>
	</div>
	<Radio title="Standard" {acceleration} price={formatPrice(price)} />
	<Radio title="Electric" {acceleration} price={formatPrice(price + 10000)} />
	<div class="flex justify-center mt-2">
		<a href={"#"} class="h-fit text-sm md:text-base items-start rounded-sm bg-honolulu-blue py-3 px-5 text-white">
			Build your Own
		</a>
	</div>
</div>
