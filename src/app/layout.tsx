import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/custom/theme-changer';
import { ThemeToggle } from '@/components/custom/theme-toggle';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased font-cairo`}>
				<ThemeProvider attribute="class" disableTransitionOnChange>
					<main className="relative">
						<div className="fixed top-4 left-4">
							<ThemeToggle />
						</div>
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
