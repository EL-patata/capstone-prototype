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
import { CheckCheckIcon } from 'lucide-react';
import { Textarea } from '../ui/textarea';

export function RegisterForm() {
	return (
		<div className={cn('flex flex-col gap-6 ')}>
			<Card className="h-[844px] flex flex-col justify-center gap-6">
				<CardHeader>
					<CardTitle className="text-2xl">Welcome John Doe</CardTitle>
					<CardDescription>
						Before we wrap up your account creation, full the form below.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="username">District</Label>
								<Input
									id="username"
									type="text"
									placeholder="Factory"
									required
								/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="username">Age</Label>
								<Input id="username" type="text" placeholder="18-65" required />
							</div>

							<div className="grid gap-2">
								<Label htmlFor="username">Height (in cm)</Label>
								<Input id="username" type="text" placeholder="170" required />
							</div>

							<div className="grid gap-2"></div>

							<div className="grid gap-2">
								<Label htmlFor="username">Diseases (fill if any)</Label>
								<Textarea
									id="username"
									className="resize-none min-h-20"
									placeholder=""
									required
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="gap-2 flex-col">
					<Button type="submit" className="w-full">
						Confirm <CheckCheckIcon />
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
