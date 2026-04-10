<script lang="ts">
    import NavLink from "./NavLink.svelte";
    import NavHeader from "./NavHeader.svelte";
    import { router } from "svelte-spa-router";
</script>

<header
    class="sticky top-0 z-50 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-b border-line bg-page/80 px-5 py-2.5 backdrop-blur-md"
>
    <NavHeader href="#/">David Freitag</NavHeader>
    <nav aria-label="Primary">
        <ul class="m-0 flex list-none items-center gap-1 p-0">
            <NavLink href="#/portfolio" active={router.location === "/portfolio"}
                >Portfolio</NavLink>
            <NavLink href="#/contact" active={router.location === "/contact"}
                >Contact</NavLink>
        </ul>
    </nav>
</header>
