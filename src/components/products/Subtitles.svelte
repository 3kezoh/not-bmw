<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined;
</script>

<div class="p-2 text-center">
	<h3 class="font-semibold text-xl">{title}</h3>
	{#if subtitle}
		<div class="text-sm">{subtitle}</div>
    {:else}
        <div class="text-sm">-</div>
    {/if}
</div>