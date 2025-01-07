import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SignIn({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6 ', className)} {...props}>
			<Card className="h-[844px] flex flex-col justify-center gap-6">
				<CardHeader>
					<CardTitle className="text-2xl">Sign up</CardTitle>
					<CardDescription>
						Enter your information below to create a new account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="username">User name</Label>
								<Input
									id="username"
									type="text"
									placeholder="John Doe"
									required
								/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="username">Phone number</Label>
								<Input
									id="username"
									type="text"
									placeholder="01234567890"
									required
								/>
							</div>

							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input id="password" type="password" required />
							</div>

							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Confirm password</Label>
								</div>
								<Input id="password" type="password" required />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="gap-2 flex-col">
					<Button type="submit" className="w-full">
						Login
					</Button>
					<Button variant="outline" className="w-full">
						Already have an account? Log in
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
