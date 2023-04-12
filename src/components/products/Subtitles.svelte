<script lang="ts">
	export let title: string;
	export let subtitle: string | undefined;
</script>

<div class="p-2 text-center">
	<h3 class="text-base font-semibold lg:text-xl">{title}</h3>
	{#if subtitle}
		<div class="text-xs lg:text-sm">{subtitle}</div>
    {:else}
        <div class="text-xs lg:text-sm">-</div>
    {/if}
</div>