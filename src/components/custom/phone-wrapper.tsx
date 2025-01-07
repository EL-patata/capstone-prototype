import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Bot, Home, MenuIcon, User } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export default function PhoneWrapper({
	children,
	className,
}: PropsWithChildren<{ className?: ClassValue }>) {
	return (
		<Card
			className={cn(
				'w-full max-w-sm h-[844px] bg-background relative',
				className
			)}
		>
			<CardHeader className="">
				<MenuIcon className="w-16" />
			</CardHeader>
			<CardContent>
				<div className="min-h-[650px]">{children}</div>
			</CardContent>
			<CardFooter className="">
				<div className="grid grid-cols-3  gap-2 w-full">
					<Button className="flex flex-col h-fit">
						<Home /> <p>Home</p>
					</Button>
					<Button variant={'secondary'} className="flex flex-col h-fit">
						<User /> Profile
					</Button>
					<Button variant={'secondary'} className="flex flex-col h-fit">
						<Bot /> Chat
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
