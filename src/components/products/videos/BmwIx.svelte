<script lang="ts">
	import fallback from "$lib/assets/products/the-ix-m60-electric-thrill.mp4";
	import src from "$lib/assets/products/the-ix-m60-electric-thrill.webm";
	import poster from "$lib/assets/products/the-ix-m60-electric-thrill.webp";
	import Video from "../../Video.svelte";
</script>

<Video {src} {fallback} width="1280" height="720" {poster} />
