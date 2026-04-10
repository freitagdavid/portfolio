<script lang="ts">
    import { page } from "$app/stores";
    import NavLink from "./NavLink.svelte";
    import NavHeader from "./NavHeader.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
    import { theme } from "../lib/theme";
</script>

{#if $theme === "rpgui"}
    <header class="rpgui-container framed portfolio-nav">
        <div class="portfolio-nav-inner">
            <NavHeader href="/">David Freitag</NavHeader>
            <div class="portfolio-nav-actions">
                <nav aria-label="Primary">
                    <ul>
                        <NavLink
                            href="/portfolio/"
                            active={$page.url.pathname === "/portfolio/"}
                            >Portfolio</NavLink>
                        <NavLink
                            href="/contact/"
                            active={$page.url.pathname === "/contact/"}
                            >Contact</NavLink>
                    </ul>
                </nav>
                <ThemeToggle />
            </div>
        </div>
    </header>
{:else}
    <header
        class="sticky top-0 z-50 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b border-line bg-page/80 px-5 py-2.5 backdrop-blur-md"
    >
        <NavHeader href="/">David Freitag</NavHeader>
        <div class="flex flex-wrap items-center gap-2">
            <nav aria-label="Primary">
                <ul class="m-0 flex list-none items-center gap-1 p-0">
                    <NavLink
                        href="/portfolio/"
                        active={$page.url.pathname === "/portfolio/"}
                        >Portfolio</NavLink>
                    <NavLink
                        href="/contact/"
                        active={$page.url.pathname === "/contact/"}
                        >Contact</NavLink>
                </ul>
            </nav>
            <ThemeToggle />
        </div>
    </header>
{/if}
