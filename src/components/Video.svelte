<script lang="ts">
	export let src: string;
	export let fallback: string;
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video controls preload="metadata" {...$$restProps}>
	<source {src} type="video/webm" />
	<source src={fallback} type="video/mp4" />
	<p>
		Your browser doesn't support HTML video. Here is a <a href={fallback}>link to the video</a> instead.
	</p>
</video>
