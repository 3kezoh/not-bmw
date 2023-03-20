<script lang="ts">
	export let specs: { title: string; value: number | string }[];
</script>

<div>
	{#each specs as spec}
		<div>
			<h3>{spec.title}</h3>
			<p>{spec.value}</p>
		</div>
	{/each}
</div>
