<script lang="ts">
	export let title: string;
	export let acceleration: number;
	export let price: string;
</script>

<div class="grid grid-cols-3 rounded-xl shadow-md border p-2 my-5 items-center">
	<div class="grid grid-cols-2 items-center">
    <svg
		class="h-5 w-5 text-gray-400 sm:h-9 sm:w-9"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
			clip-rule="evenodd"
		/>
	</svg>
	<div class="font-bold">{title}</div>
    </div>
	<div>{acceleration} sec</div>
	<div>{price}</div>
</div>
