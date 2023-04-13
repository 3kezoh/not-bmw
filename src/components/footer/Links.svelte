<script lang="ts">
	export let links: string[];
</script>

{#each links as link}
	<li>
		<a href={"#"} class="md:text-start">
			{link}
		</a>
	</li>
{/each}
