<script lang="ts">
	export let links: string[];
</script>

{#each links as link}
	<li>
		<button>
			{link}
		</button>
	</li>
{/each}
