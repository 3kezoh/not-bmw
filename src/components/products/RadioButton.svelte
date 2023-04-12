<script lang="ts">
	import { formatPrice } from "../../utils/format";

	export let acceleration: number;
	export let price: number;
</script>

<div class="container mx-auto px-6 py-8">
	<div class="mt-6 space-y-8 xl:mt-12">
		<div
			class="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4 dark:border-gray-700"
		>
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
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

				<div class="mx-5 flex flex-col items-center space-y-1">
					<h2 class="text-lg font-semibold sm:text-2xl">Standard</h2>
				</div>
			</div>
			<div class="flex flex-col items-center">
				<h2 class="text-s px-2 text-gray-400 ">
					{acceleration}
					<span class="text-base font-medium">sec</span>
				</h2>
			</div>
			<h2 class="flex flex-col items-center">
				{formatPrice(price)}
			</h2>
		</div>
		<div
			class="mx-auto flex max-w-2xl cursor-pointer items-center justify-between rounded-xl border px-8 py-4 dark:border-gray-700"
		>
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
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

				<div class="mx-5 flex flex-col items-center space-y-1">
					<h2 class="text-lg font-semibold sm:text-2xl">Electric</h2>
				</div>
			</div>
			<div class="flex flex-col items-center">
				<h2 class="text-s px-2 text-gray-400 ">
					{acceleration}
					<!-- A changer -->
					<span class="text-base font-medium">sec</span>
				</h2>
			</div>
			<div class="flex flex-col items-center">
				<div class="text-s px-2 text-gray-400">
					{formatPrice(price)}
				</div>
			</div>
		</div>
		<div class="flex justify-center">
			<button
				class="transform rounded-md bg-blue-600 px-8 py-2 capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
			>
				Build your Own
			</button>
		</div>
	</div>
</div>
