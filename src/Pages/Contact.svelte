<script>
    import NavBar from "../components/NavBar.svelte";
    import Hero from "../components/Hero.svelte";
</script>

<style>
    div {
        border: black solid 1px;
        width: 600px;
        margin: 0 auto;
        margin-top: 50px;
        border-radius: 7px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    a {
        border-radius: 7px;
        padding: 5px;
        color: inherit;
        text-decoration: none;
        align-self: stretch;
        border: solid 1px rgba(0, 0, 0, 0);
    }

    a:hover {
        color: #007199;
        background-color: var(--secondary-bg);
        border: solid 1px #007199;
    }
</style>

<NavBar></NavBar>
<main>
    <Hero></Hero>
    <div>
        <a href="mailto:david@freitag.site">Send me an email</a>
        <a href="https://www.linkedin.com/in/david-freitag-b49792106/"
            >Linkedin</a
        >
        <a href="https://github.com/freitagdavid">Github</a>
    </div>
    <!-- <form method=POST class="contact_form" action="mailto:david@freitag.site">
                <fieldset name="name">
                    <label for="name">Name</label>
                    <label for="firstName">First: </label>
                    <input name="firstName" />
                    <label for="lastName">Last: </label>
                    <input name="lastName" />
                </fieldset>
                <label for="email">Email Address: </label>
                <input name="email" />
                <textarea></textarea>
            </form> -->
    <button type="submit"></button>
</main>
