<script lang="ts">
    export let href: string;
</script>

<h2 class="m-0 text-base font-bold">
    <a
        {href}
        class="font-sans font-bold tracking-tight text-ink no-underline transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
        <slot></slot>
    </a>
</h2>
