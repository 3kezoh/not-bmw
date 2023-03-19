<script lang="ts">
	export let model: string;
	export let year: number;
	export let price: number;
	export let dealerName: string;
</script>

<div>
	<h1>Model: {model}</h1>
	<p>Year: {year}</p>
	<p>Price: {price}$</p>
	<p>Dealer: {dealerName}</p>

	<button>Book online</button>
</div>
