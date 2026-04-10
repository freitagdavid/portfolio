<script lang="ts">
    import { theme, toggleTheme } from "../lib/theme";
</script>

{#if $theme === "rpgui"}
    <button
        type="button"
        class="rpgui-button golden nav-rpgui-btn"
        onclick={toggleTheme}
        aria-label="Switch to modern theme"
    >
        <p>Boring Mode</p>
    </button>
{:else}
    <button
        type="button"
        class="rounded-full border border-line-strong bg-surface px-3 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink no-underline shadow-sm transition-[color,background-color,border-color] hover:border-accent hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        onclick={toggleTheme}
        aria-label="Switch to RPG UI theme"
    >
        Fun Mode
    </button>
{/if}
