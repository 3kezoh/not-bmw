<script lang="ts">
	interface TechnicalSpecProps {
		titleSpec: string;
		valueSpec: string;
	}

	export let props: TechnicalSpecProps;
</script>

<div>
	<h4>{props.titleSpec}</h4>
	<h5>{props.valueSpec}</h5>
</div>
