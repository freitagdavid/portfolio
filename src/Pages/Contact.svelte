<script lang="ts">
    import NavBar from "../components/NavBar.svelte";
    import Hero from "../components/Hero.svelte";
    import { theme } from "../lib/theme";
</script>

<NavBar />
<main class={$theme === "rpgui" ? "portfolio-main" : ""}>
    <Hero />
    {#if $theme === "rpgui"}
        <div class="rpgui-container framed-golden-2">
            <h2 id="contact-heading">Contact</h2>
            <hr class="golden" />
            <p class="portfolio-contact-intro">
                Reach out on any of these — I’d love to hear from you.
            </p>
            <div class="portfolio-contact-links">
                <a
                    href="mailto:david@freitag.site"
                    class="rpgui-container framed-grey portfolio-contact-row"
                >
                    <span class="portfolio-contact-icon" aria-hidden="true"
                        >@</span>
                    <span>Email</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/david-freitag-b49792106/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rpgui-container framed-grey portfolio-contact-row"
                >
                    <span class="portfolio-contact-icon" aria-hidden="true"
                        >in</span>
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/freitagdavid"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rpgui-container framed-grey portfolio-contact-row"
                >
                    <span class="portfolio-contact-icon" aria-hidden="true"
                        >&lt;/&gt;</span>
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    {:else}
        <section
            class="mx-auto mt-10 max-w-md rounded-md border border-line bg-surface p-6 shadow-md"
            aria-labelledby="contact-heading"
        >
            <h2
                id="contact-heading"
                class="m-0 mb-1.5 font-sans text-[1.2rem] font-semibold"
            >
                Contact
            </h2>
            <p class="mb-5 text-[0.95rem] leading-relaxed text-muted">
                Reach out on any of these — I’d love to hear from you.
            </p>
            <div class="flex flex-col gap-2">
                <a
                    href="mailto:david@freitag.site"
                    class="flex items-center gap-3 rounded-sm border border-line bg-page/40 px-4 py-3.5 font-sans text-[0.95rem] font-semibold text-ink no-underline transition-[color,background-color,border-color] hover:border-accent-soft hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    <span
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent-soft text-[0.85rem] font-bold text-accent"
                        aria-hidden="true">@</span>
                    <span>Email</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/david-freitag-b49792106/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 rounded-sm border border-line bg-page/40 px-4 py-3.5 font-sans text-[0.95rem] font-semibold text-ink no-underline transition-[color,background-color,border-color] hover:border-accent-soft hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    <span
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent-soft text-[0.85rem] font-bold text-accent"
                        aria-hidden="true">in</span>
                    <span>LinkedIn</span>
                </a>
                <a
                    href="https://github.com/freitagdavid"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-3 rounded-sm border border-line bg-page/40 px-4 py-3.5 font-sans text-[0.95rem] font-semibold text-ink no-underline transition-[color,background-color,border-color] hover:border-accent-soft hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                    <span
                        class="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent-soft text-[0.85rem] font-bold text-accent"
                        aria-hidden="true">&lt;/&gt;</span>
                    <span>GitHub</span>
                </a>
            </div>
        </section>
    {/if}
</main>
