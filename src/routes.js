import NavBar from "./components/NavBar.svelte";
import Home from "./Pages/Home.svelte";
import Portfolio from "./Pages/Portfolio.svelte";
import Contact from "./Pages/Contact.svelte";

const routes = {
    // "/*": NavBar,
    "/": Home,
    "/portfolio": Portfolio,
    "/contact": Contact
};

export default routes;
