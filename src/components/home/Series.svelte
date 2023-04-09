<script>
	const models = [
		"X1",
		"X3",
		"X4",
		"X5",
		"X6",
		"X7",
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		"Z4",
		"i4",
		"i7",
		"iX",
		"XM",
		"M"
	];
</script>

<nav
	class="hidden lg:flex bg-raisin-black items-center gap-9 justify-center text-white font-bold py-9 px-12 "
>
	<span>Select a Series</span>
	<ul class="flex gap-9">
		{#each models as model}
			<li>
				<button>
					{model}
				</button>
			</li>
		{/each}
	</ul>
</nav>
