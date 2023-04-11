<script lang="ts">
	import desktopMetadata from "$lib/assets/products/bmw-ix-desktop.jpg?width=2560;1920;1600;1366;1024&format=avif;webp;jpg&meta=format;height;src;width";
	import mobileMetadata from "$lib/assets/products/bmw-ix-mobile.jpg?width=640&format=avif;webp;jpg&meta=format;height;src;width";
	import ResponsivePicture from "../../ResponsivePicture.svelte";
</script>

<ResponsivePicture
	alt="A BMW iX"
	class="object-contain  md:w-screen md:object-bottom"
	{desktopMetadata}
	isLazyLoaded={false}
	media="(max-width: 768px)"
	{mobileMetadata}
	sizes="(max-width: 2560px) 100vw, 2560px"
/>
