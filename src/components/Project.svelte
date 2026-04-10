<script lang="ts">
    import type { Project } from "../data/projects";
    import ProjectLink from "./ProjectLink.svelte";
    import { theme } from "../lib/theme";

    export let project: Project;
</script>

{#if $theme === "rpgui"}
    <li>
        <article class="rpgui-container framed portfolio-project">
            <div class="portfolio-project-title">
                <h4>{project.name}</h4>
            </div>
            <div class="portfolio-project-shot">
                <div
                    class="rpgui-container framed-grey portfolio-project-shot-inner"
                >
                    <img
                        src={project.screenshot}
                        alt="Screenshot of {project.name}"
                    />
                </div>
            </div>
            <div class="portfolio-project-body">
                <p>{project.description}</p>
                <p class="portfolio-tech-label">Technologies</p>
                <ul class="portfolio-tech-row">
                    {#each project.technologies as tech}
                        <li>{tech}</li>
                    {/each}
                </ul>
            </div>
            <div class="portfolio-project-actions">
                <div class="portfolio-project-actions-inner">
                    <ProjectLink href={project.github}>GitHub</ProjectLink>
                    <ProjectLink href={project.live}>Live site</ProjectLink>
                </div>
            </div>
        </article>
    </li>
{:else}
    <li class="mt-8 first:mt-0">
        <article
            class="flex flex-col overflow-hidden rounded-md border border-line bg-surface shadow-sm transition-[box-shadow,border-color] hover:border-line-strong hover:shadow-md md:grid md:grid-cols-[minmax(260px,300px)_minmax(0,1fr)] md:grid-rows-[auto_1fr_auto]"
        >
            <h4
                class="order-1 m-0 border-b border-line bg-gradient-to-b from-white to-page/50 px-5 py-4 text-center font-sans text-[1.1rem] font-bold tracking-tight md:order-none md:col-start-2 md:row-start-1 md:flex md:items-center md:text-left"
            >
                {project.name}
            </h4>
            <div
                class="order-2 border-b border-line bg-secondary md:order-none md:col-start-1 md:row-span-3 md:row-start-1 md:flex md:items-center md:justify-center md:border-b-0 md:border-r md:border-line md:self-stretch md:p-4"
            >
                <div
                    class="aspect-square w-full overflow-hidden md:w-[288px] md:shrink-0"
                >
                    <img
                        class="h-full w-full object-cover object-top"
                        src={project.screenshot}
                        alt="Screenshot of {project.name}"
                    />
                </div>
            </div>
            <div
                class="order-3 px-5 pb-1 pt-[1.1rem] md:order-none md:col-start-2 md:row-start-2"
            >
                <p class="mb-[0.85rem] leading-[1.75] text-ink">
                    {project.description}
                </p>
                <p
                    class="mb-2 mt-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted"
                >
                    Technologies
                </p>
                <ul class="m-0 flex list-none flex-wrap gap-1.5 p-0">
                    {#each project.technologies as tech}
                        <li
                            class="rounded-full bg-accent-soft px-[0.65rem] py-1 font-sans text-[0.78rem] font-medium text-accent-hover"
                        >
                            {tech}
                        </li>
                    {/each}
                </ul>
            </div>
            <div
                class="order-4 flex flex-wrap gap-2.5 border-t border-line bg-page/35 px-5 py-4 md:order-none md:col-start-2 md:row-start-3"
            >
                <ProjectLink href={project.github}>GitHub</ProjectLink>
                <ProjectLink href={project.live}>Live site</ProjectLink>
            </div>
        </article>
    </li>
{/if}
