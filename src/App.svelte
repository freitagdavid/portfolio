<script>
    export let name;
    import "./reset.css";
    import "./global.css";
    import NavBar from "./components/NavBar.svelte";
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>

<style></style>

<Router {routes}></Router>
