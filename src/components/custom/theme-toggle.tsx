'use client';

import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			size={'icon'}
			onClick={() => {
				setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
			}}
		>
			{theme === 'light' ? <Moon /> : <Sun />}
		</Button>
	);
}
