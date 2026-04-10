<script lang="ts">
    import projects from "../data/projects";
    import Project from "./Project.svelte";
</script>

<ul class="m-0 mx-auto w-full max-w-4xl list-none p-0">
    {#each projects as project}
        <Project {project} />
    {/each}
</ul>
