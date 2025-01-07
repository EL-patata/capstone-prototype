import { Bell } from 'lucide-react';
import HomeChart from '../custom/home-chart';
import PhoneWrapper from '../custom/phone-wrapper';
import { Card, CardContent } from '../ui/card';

export default function NotificationExample() {
	return (
		<PhoneWrapper className={'overflow-hidden'}>
			<div className="pt-8">
				<HomeChart
					variant={'green'}
					reading={46}
					detailedReadings={{ one: 43, two: 48 }}
				/>
			</div>
			<div className="absolute bg-gray-950/30 z-40 w-[200%] h-[200%] -top-1/2 left-1/2 -translate-x-1/2"></div>
			<div className="absolute z-50 top-4 left-1/2 -translate-x-1/2">
				<Card className="bg-white text-start w-[344px] text-black">
					<CardContent className="p-4 text-start">
						<p className="font-semibold text-lg flex items-center justify-between ">
							<span className="flex items-center gap-1.5">
								Heads up! <Bell />
							</span>
							<span className="text-muted-foreground text-base">10AM</span>
						</p>
						<p className="text-muted-foreground">This is a notification</p>
					</CardContent>
				</Card>
			</div>
		</PhoneWrapper>
	);
}
