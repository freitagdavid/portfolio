import munchiezScreenshot from '$lib/assets/munchiez-screenshot.png';
import p1screenshot from '$lib/assets/p1screenshot.png';
import p2screenshot from '$lib/assets/p2screenshot.png';

export interface Project {
	name: string;
	screenshot: string;
	description: string;
	technologies: string[];
	github: string;
	live: string;
}

const projects: Project[] = [
	{
		name: 'Lodgel',
		screenshot: p2screenshot,
		description:
			'This is an application to allow property owners and guests to keep track of the progress of cleaning a property.',
		technologies: ['React', 'Typescript', 'Node.js', 'express', 'PostgreSQL'],
		github: 'https://github.com/Lambda-School-Labs/labs10-cleaner-tool',
		live: 'https://determined-tereshkova-b03c8b.netlify.com/'
	},
	{
		name: "Gotta Catch 'Em All",
		screenshot: p1screenshot,
		description:
			'This is a little app I made for keeping track of your progress on a nationaldex. I plan to add some more features in the future enjoy!',
		technologies: ['React', 'PokeAPI', 'NodeJS'],
		github: 'https://github.com/freitagdavid/national_dex_tracker',
		live: 'https://pokedex.freitag.site/'
	},
	{
		name: 'MunchiEZ',
		screenshot: munchiezScreenshot,
		description:
			'A recipe site and food journal: browse dishes in a card grid, filter by tags, and read full posts in the blog. Content lives in markdown, the UI is a React + TypeScript SPA with TanStack Router and Tailwind, and the production build is hosted on GitHub Pages.',
		technologies: ['React', 'TypeScript', 'Vite', 'TanStack Router', 'Tailwind CSS', 'GitHub Pages'],
		github: 'https://github.com/freitagdavid/MunchiEZ',
		live: 'https://freitagdavid.github.io/MunchiEZ/'
	},
];

export default projects;
