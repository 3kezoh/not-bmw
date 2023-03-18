<script lang="ts">
	interface PrimaryDescriptionProps {
		model: string;
		year: number;
		price: number;
		dealerName: string;
	}

	export let props: PrimaryDescriptionProps;
</script>

<div>
	<h1>Model: {props.model}</h1>
	<p>Year: {props.year}</p>
	<p>Price: {props.price}$</p>
	<p>Dealer: {props.dealerName}</p>

	<button>Book online</button>
</div>
