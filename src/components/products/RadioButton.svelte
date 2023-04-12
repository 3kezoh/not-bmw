<script lang="ts">
	import { formatPrice } from "../../utils/format";

	export let acceleration: number;
	export let price: number;
</script>

<div class="container px-6 py-8 mx-auto">
	<div class="mt-6 space-y-8 xl:mt-12">
		<div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
			<div class="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"/>
					</svg>

					<div class="flex flex-col items-center mx-5 space-y-1">
						<h2 class="text-lg font-semibold sm:text-2xl">
							Standard
						</h2>
					</div>
			</div>
            <div class="flex flex-col items-center">
                    <h2 class="px-2 text-s text-gray-400 ">
						{acceleration}
						<span class="text-base font-medium">sec</span></h2>
            </div>
			<h2 class="flex flex-col items-center">
					<h2 class="px-2 text-s text-gray-400">
						{formatPrice(price)}
					</h2>
			</h2>
		</div>
        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
			<div class="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9"
						viewBox="0 0 20 20"
						fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clip-rule="evenodd"/>
					</svg>

					<div class="flex flex-col items-center mx-5 space-y-1">
						<h2 class="text-lg font-semibold sm:text-2xl">
							Electric
						</h2>
					</div>
			</div>
            <div class="flex flex-col items-center">
                    <h2 class="px-2 text-s text-gray-400 ">
						{acceleration}  <!-- A changer -->
						<span class="text-base font-medium">sec</span></h2>
            </div>
			<h2 class="flex flex-col items-center">
					<h2 class="px-2 text-s text-gray-400">
						{formatPrice(price)}
					</h2>
			</h2>
		</div>
		<div class="flex justify-center">
				<button class="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
					Build your Own
				</button>
		</div>
	</div>
</div>