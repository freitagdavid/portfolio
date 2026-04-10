<script lang="ts">
    export let href: string;
    export let active: boolean;
</script>

<li class="list-none">
    <a
        {href}
        aria-current={active ? "page" : undefined}
        class="inline-flex items-center rounded-full px-3 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] no-underline transition-colors hover:text-accent hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        class:text-muted={!active}
        class:text-accent={active}
        class:bg-accent-soft={active}
        class:font-bold={active}
    >
        <slot></slot>
    </a>
</li>
