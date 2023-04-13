<script lang="ts">
	import metadata from "$lib/assets/products/bmw-5s-sedan.jpg?width=2560;1920;1600;1366;1024&format=avif;webp;jpg&meta=format;height;src;width";
	import Picture from "../../Picture.svelte";
</script>

<Picture
	alt="A BMW 5 Series Sedan"
	isLazyLoaded={false}
	{metadata}
	class="object-contain  md:w-screen md:object-bottom"
	media="(max-width: 768px)"
	sizes="(max-width: 2560px) 100vw, 2560px"
/>
