import type { Component } from 'svelte';
import Home from './Pages/Home.svelte';
import Portfolio from './Pages/Portfolio.svelte';
import Contact from './Pages/Contact.svelte';

const routes: Record<string, Component> = {
	'/': Home,
	'/portfolio': Portfolio,
	'/contact': Contact
};

export default routes;
