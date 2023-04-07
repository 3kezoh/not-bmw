<script lang="ts">
	import desktopMetadata from "$lib/assets/home/bmw-xm-desktop.jpg?width=2560;1920;1600;1366;1024&format=avif;webp;jpg&meta=format;height;src;width";
	import mobileMetadata from "$lib/assets/home/bmw-xm-mobile.jpg?width=768;640&format=avif;webp;jpg&meta=format;height;src;width";
	import ResponsivePicture from "../../ResponsivePicture.svelte";
</script>

<ResponsivePicture
	alt="A BMW XM"
	class="md:object-cover md:w-screen md:h-screen md:object-bottom"
	{desktopMetadata}
	media="(max-width: 768px)"
	{mobileMetadata}
	sizes="(max-width: 2560px) 100vw, 2560px"
/>
