<script>
	import Category from "./footer/Category.svelte";
	import Copyright from "./footer/Copyright.svelte";
	import Socials from "./footer/Socials.svelte";
	import UsefulLinks from "./footer/UsefulLinks.svelte";

	const categories = [
		{
			heading: "DISCOVER",
			topics: [
				{
					heading: "The BMW Difference",
					links: [
						"My BMW App",
						"BMW Individual",
						"BMW All-Electric",
						"Plug-in Hybrid Electric"
					]
				},
				{
					heading: "Experience & Partnerships",
					links: [
						"Performance Driving School",
						"Ultimate Driving Experience",
						"Performance Center Delivery",
						"M Track Days"
					]
				}
			]
		},
		{
			heading: "BUY",
			topics: [
				{
					heading: "Online Shopping Tools",
					links: [
						"Shop BMW Parts & Accessories",
						"Shop New Inventory",
						"Shop Pre-Owned Inventory",
						"Build Your Own"
					]
				},
				{
					heading: "Finance & Incentives",
					links: [
						"Apply for Financing",
						"BMW Financial Services",
						"Manage Your BMW Financial Services Account"
					]
				}
			]
		}
	];
</script>

<footer>
	<div class="px-4 py-10 md:p-20 bg-cultured grid gap-10 md:grid-cols-2">
		{#each categories as category}
			<Category {...category} />
		{/each}
		<div class="text-sm md:text-base font-bold grid grid-flow-col items-center md:hidden">
			<span>Company Info</span>
			<svg
				viewBox="0 0 24 24"
				class="h-6 w-6 fill-none stroke-2 stroke-raisin-black justify-self-end md:hidden"
			>
				<path d="M12 5v14" />
				<path d="M5 12h14" />
			</svg>
		</div>
	</div>
	<div
		class="grid grid-flow-row md:grid-flow-col gap-4 md:gap-20 px-4 py-4 md:p-20 text-xs border-t-[1px] border-chinese-silver"
	>
		<div class="grid gap-10">
			<UsefulLinks />
			<Copyright />
		</div>
		<Socials />
	</div>
</footer>
