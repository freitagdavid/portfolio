<script>
    import projects from "../data/projects";
    import Project from "./Project.svelte";
</script>

<style>
    ul {
        width: 600px;
        margin: 0 auto;
    }
</style>

<ul class="projects">
    {#each projects as project}
        <Project project={project} />
    {/each}
</ul>
