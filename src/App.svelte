<script lang="ts">
    import "./app.css";
    import { onMount } from "svelte";
    import Router from "svelte-spa-router";
    import routes from "./routes";
    import { theme } from "./lib/theme";

    let townThemeAudio: HTMLAudioElement | undefined;

    onMount(() => {
        return theme.subscribe((t) => {
            document.body.classList.toggle("theme-body-rpgui", t === "rpgui");
            document.body.classList.toggle("theme-body-modern", t === "modern");
        });
    });

    $: if (townThemeAudio) {
        if ($theme === "rpgui") {
            townThemeAudio.volume = 0.35;
            void townThemeAudio.play().catch(() => {
                /* autoplay blocked until user gesture; theme toggle counts as gesture next time */
            });
        } else {
            townThemeAudio.pause();
            townThemeAudio.currentTime = 0;
        }
    }
</script>

{#if $theme === "rpgui"}
    <div class="rpgui-content portfolio-root">
        <Router {routes} />
    </div>
{:else}
    <div class="theme-modern">
        <Router {routes} />
    </div>
{/if}

<!-- Town BGM: only audible while RPG UI theme is active (controlled above) -->
<audio
    bind:this={townThemeAudio}
    class="sr-only"
    src="/TownTheme.mp3"
    loop
    preload="auto"
    aria-hidden="true"
></audio>
