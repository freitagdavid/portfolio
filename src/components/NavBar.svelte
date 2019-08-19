<script>
    import NavLink from "./NavLink.svelte";
    import NavHeader from "./NavHeader.svelte";
    import { location } from "svelte-spa-router";
</script>

<style>
    header {
        width: 97%;
        display: grid;
        grid-template-columns: 80% auto;
        margin: 0 auto;
        height: 52px;
        align-items: center;
    }
    header nav {
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    header nav ul {
        height: 100%;
        width: 190px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>

<header>
    <NavHeader href="#/">David Freitag</NavHeader>
    <nav>
        <ul>
            <NavLink href="#/portfolio" active={$location == "/portfolio"}>Portfolio</NavLink>
            <NavLink href="#/contact" active={$location == "/contact"}>Contact</NavLink>
        </ul>
    </nav>
</header>
