<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined;
</script>

<div class="p-2 shadow-lg">
	<h3 class="font-semibold text-xl">{title}</h3>
	{#if subtitle}
		<h6 class="text-sm">{subtitle}</h6>
	{/if}
</div>