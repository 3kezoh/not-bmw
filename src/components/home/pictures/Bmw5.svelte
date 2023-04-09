<script>
	import Picture from "../../Picture.svelte";
	import bmw5 from "$lib/assets/home/bmw-5.jpg?width=600;300;150&format=avif;webp;jpg&meta=format;height;src;width";
</script>

<Picture
	alt="A BMW 5-Series Sedan"
	metadata={bmw5}
	sizes="(max-width: 768px) calc(50vw - 1.5rem), (max-width: 2560px) calc(25vw - 4.75rem), 600px"
/>
