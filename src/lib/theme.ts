import { writable } from 'svelte/store';

export type PortfolioTheme = 'modern' | 'rpgui';

const STORAGE_KEY = 'portfolio-theme';

function readTheme(): PortfolioTheme {
	if (typeof localStorage === 'undefined') return 'modern';
	return localStorage.getItem(STORAGE_KEY) === 'rpgui' ? 'rpgui' : 'modern';
}

export const theme = writable<PortfolioTheme>(readTheme());

export function setTheme(next: PortfolioTheme): void {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem(STORAGE_KEY, next);
	}
	theme.set(next);
}

export function toggleTheme(): void {
	theme.update((t) => {
		const next: PortfolioTheme = t === 'modern' ? 'rpgui' : 'modern';
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, next);
		}
		return next;
	});
}
