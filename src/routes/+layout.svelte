<script>
	import "../app.css";
	import { page } from "$app/stores";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
