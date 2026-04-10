<script lang="ts">
    import projects from "../data/projects";
    import Project from "./Project.svelte";
    import { theme } from "../lib/theme";
</script>

{#if $theme === "rpgui"}
    <ul class="portfolio-project-list">
        {#each projects as project}
            <Project {project} />
        {/each}
    </ul>
{:else}
    <ul class="m-0 mx-auto w-full max-w-4xl list-none p-0">
        {#each projects as project}
            <Project {project} />
        {/each}
    </ul>
{/if}
