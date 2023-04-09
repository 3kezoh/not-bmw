<script>
	import Picture from "../../Picture.svelte";
	import bmwX5 from "$lib/assets/home/bmw-x5.jpg?width=600;300;150&format=avif;webp;jpg&meta=format;height;src;width";
</script>

<Picture
	alt="A BMW X5"
	metadata={bmwX5}
	sizes="(max-width: 768px) calc(50vw - 1.5rem), (max-width: 2560px) calc(25vw - 4.75rem), 600px"
/>
