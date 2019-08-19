<script>
    export let href;
    export let active;
</script>

<style>
    a {
        display: flex;
        font-family: "Monsterrat", helvetica neue, Helvetica, Arial, sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15rem;
        font-weight: 700;
        line-height: 1.125rem;
        color: inherit;
        align-items: center;
        padding: 0 7px;
    }

    li {
        height: 100%;
        align-items: stretch;
        justify-items: stretch;
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
