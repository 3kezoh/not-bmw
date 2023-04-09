<script>
	import Links from "./Links.svelte";

	const links = [
		"Ad Choices",
		"Privacy Policy",
		"Do Not Sell My Personal Information",
		"Safety and Emissions Recalls",
		"Fraud Warning",
		"BMW Accessibility Statement",
		"BMW Press Room",
		"Site Map",
		"Careers",
		"Contact Us",
		"Company Info",
		"BMW Motorcycles",
		"BMW Bank",
		"FAQ"
	];
</script>

<ul class="hidden md:flex gap-4 flex-wrap">
	<Links {links} />
</ul>
