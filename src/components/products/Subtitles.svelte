<script lang="ts">
	export let title: string;
	export let subtitle: string|undefined;
</script>

<div class="p-2 shadow-lg">
	<h3 class="font-semibold md:text-xl">{title}</h3>
    {#if subtitle}
		<h6 class="font-semilight">{subtitle}</h6>
    {/if}
</div>
