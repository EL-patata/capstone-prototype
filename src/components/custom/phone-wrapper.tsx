import { PropsWithChildren } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Bot, Home, LogOut, MenuIcon, User } from 'lucide-react';

export default function PhoneWrapper({ children }: PropsWithChildren) {
	return (
		<Card className="w-full max-w-sm h-[844px]">
			<CardHeader className="">
				<MenuIcon className="w-16" />
			</CardHeader>
			<CardContent>
				<div className="min-h-[650px]">{children}</div>
			</CardContent>
			<CardFooter className="">
				<div className="grid grid-cols-4 gap-3">
					<Button>
						<Home /> Home
					</Button>
					<Button variant={'secondary'}>
						<User /> Profile
					</Button>
					<Button variant={'secondary'}>
						<Bot /> Chat
					</Button>
					<Button variant={'secondary'}>
						<LogOut />
						Logout
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
