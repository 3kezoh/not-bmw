<script lang="ts">
	import { formatPrice } from "../../utils/format";
	import Radio from "./Radio.svelte";

	export let acceleration: number;
	export let price: number;
</script>

<div class="grid grid-rows-4 text-center">
	<div class="grid grid-cols-3 items-end font-semibold">
		<div></div>
		<div>0-60 MPH</div>
		<div>Price</div>
	</div>
	<Radio title="Standard" acceleration={acceleration} price={formatPrice(price)} />
	<Radio title="Electric" acceleration={acceleration} price={formatPrice(price+10000)} />
	<div class="flex justify-center">
		<button class="h-fit bg-honolulu-blue text-white rounded-sm w-32 py-3 items-start">
			Build your Own
		</button>
	</div>
</div>