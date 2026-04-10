<script lang="ts">
    import NavBar from "../components/NavBar.svelte";
    import Hero from "../components/Hero.svelte";
    import AboutMe from "../components/AboutMe.svelte";
    import { theme } from "../lib/theme";
</script>

<NavBar />
<main class={$theme === "rpgui" ? "portfolio-main" : ""}>
    <Hero />
    <AboutMe />
</main>
