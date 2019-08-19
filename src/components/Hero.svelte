<script>
    const myPicture = require("../../img/me.jpg");
</script>

<style>
    div {
        height: 230px;
        padding: 50px 0;
        background: var(--secondary-bg);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: solid 1px rgba(0, 0, 0, 0.2);
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        margin: 0 0 20px 0;
    }

    img {
        border: solid black 1px;
        border-radius: 20%;
        overflow: hidden;
        height: 100px;
    }

    h1 {
        font-family: "open sans", sans-serif;
        font-size: 3rem;
        margin: 20px 0;
        font-weight: 700;
    }

    h3 {
        font-family: "merriweather", serif;
        margin-top: 8px;
    }
</style>

<div>
    <img src="{myPicture}" alt="An image of myself" />
    <h1>David Freitag</h1>
    <h3>Full Stack Developer</h3>
</div>
