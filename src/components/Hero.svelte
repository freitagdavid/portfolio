<script lang="ts">
    import myPicture from "../../img/me.jpg";
</script>

<section
    class="relative -mx-5 mb-10 overflow-hidden border-b border-line bg-[linear-gradient(160deg,#eef6f7_0%,#f5f0eb_45%,#e8f0f4_100%)] px-6 py-[clamp(2.5rem,6vw,4rem)] before:pointer-events-none before:absolute before:-top-[40%] before:right-[-20%] before:h-[min(70vw,420px)] before:w-[min(70vw,420px)] before:bg-[radial-gradient(circle,rgba(13,107,122,0.14)_0%,transparent_70%)] before:content-['']"
    aria-label="Introduction"
>
    <div
        class="relative mx-auto flex max-w-[40rem] flex-col items-center gap-4 text-center"
    >
        <div
            class="rounded-full bg-gradient-to-br from-[rgba(13,107,122,0.35)] to-[rgba(26,31,36,0.12)] p-1 shadow-md"
        >
            <img
                src={myPicture}
                alt="David Freitag"
                width="112"
                height="112"
                class="block h-28 w-28 rounded-full border-[3px] border-surface object-cover"
            />
        </div>
        <h1
            class="mt-2 bg-gradient-to-br from-ink to-[#2d4a52] bg-clip-text font-sans text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-transparent"
        >
            David Freitag
        </h1>
        <p
            class="m-0 font-sans text-[0.95rem] font-medium uppercase tracking-[0.12em] text-muted"
        >
            Full stack developer
        </p>
    </div>
</section>
