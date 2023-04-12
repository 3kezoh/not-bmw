<script>
	import "../../app.css";
	import { page } from "$app/stores";
	import Header from "../../components/Header.svelte";
	import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<Header />
<div class="snap-y snap-proximity h-d-screen overflow-y-scroll overscroll-y-none">
	<main>
		<slot />
	</main>
	<Footer />
</div>
