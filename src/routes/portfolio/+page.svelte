<script lang="ts">
	import NavBar from "../../components/NavBar.svelte";
	import Hero from "../../components/Hero.svelte";
	import ProjectList from "../../components/ProjectList.svelte";
	import { theme } from "../../lib/theme";
</script>

<NavBar />
<main class={$theme === "rpgui" ? "portfolio-main" : ""}>
	<Hero />
	<ProjectList />
</main>
