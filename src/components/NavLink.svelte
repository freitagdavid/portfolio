<script>
    export let href;
    export let active;
</script>

<style>
    a {
        font-family: "Monsterrat", helvetica neue, Helvetica, Arial, sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15rem;
        font-weight: 700;
        line-height: 1.125rem;
        color: inherit;
    }

    li {
        padding: 0 7px;
        height: 100%;
        align-items: center;
        display: flex;
    }

    li:hover {
        color: #007199;
        background-color: var(--secondary-bg);
    }

    li[active="true"] {
        color: #00a3df;
    }
</style>

<li {active}>
    <a href="{href}"><slot></slot></a>
</li>
