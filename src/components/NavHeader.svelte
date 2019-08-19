<script>
    export let href;
</script>

<style>
    a {
        font-family: "Monsterrat", helvetica neue, Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15rem;
        font-weight: 700;
        color: inherit;
        line-height: 1.125rem;
        font-size: 1.04rem;
    }
</style>

<h2>
    <a href="{href}">
        <slot></slot>
    </a>
</h2>
