<script lang="ts">
    import { theme } from "../lib/theme";

    export let href: string;
</script>

{#if $theme === "rpgui"}
    <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="rpgui-button golden"
    >
        <p><slot /></p>
    </a>
{:else}
    <a
        {href}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-w-[7.5rem] flex-1 items-center justify-center rounded-sm border border-line-strong bg-surface px-4 py-2.5 font-sans text-[0.8rem] font-semibold tracking-wide text-accent no-underline shadow-sm transition-[color,background-color,border-color,transform] hover:-translate-y-px hover:border-accent hover:bg-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
        <slot />
    </a>
{/if}
