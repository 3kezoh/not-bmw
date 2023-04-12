<script lang="ts">
	export let links: string[];
</script>

{#each links as link}
	<li>
		<button class="md:text-start">
			{link}
		</button>
	</li>
{/each}
