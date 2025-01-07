import HomeChart from '@/components/custom/home-chart';
import PhoneWrapper from '@/components/custom/phone-wrapper';
import NotificationExample from '@/components/example/notification';
import ChatBot from '@/components/pages/chat-bot';
import { Login } from '@/components/pages/login';
import Menu from '@/components/pages/menu';
import { RegisterForm } from '@/components/pages/register-form';
import { SignIn } from '@/components/pages/signin';

type THomeChart = {
	variant: 'green' | 'yellow' | 'red';
	reading: number;
	detailedReadings: {
		one: number;
		two: number;
	};
};
export default function page() {
	const homeCharts: THomeChart[] = [
		{
			variant: 'green',
			reading: 46,
			detailedReadings: { one: 43, two: 48 },
		},
		{
			variant: 'yellow',
			reading: 170,
			detailedReadings: { one: 122, two: 201 },
		},
		{
			variant: 'red',
			reading: 280,
			detailedReadings: { one: 366, two: 267 },
		},
	];

	return (
		<div>
			<div className="flex min-h-svh w-full justify-center p-6 md:p-10">
				<div className="flex flex-col gap-3 w-full max-w-[26rem] bg-slate-100 p-4 rounded">
					<Login />

					<SignIn />

					<RegisterForm />

					<Menu />

					<PhoneWrapper>
						<ChatBot />
					</PhoneWrapper>

					{homeCharts.map((chart, index) => (
						<PhoneWrapper key={index}>
							<div className="pt-8">
								<HomeChart
									variant={chart.variant}
									reading={chart.reading}
									detailedReadings={chart.detailedReadings}
								/>
							</div>
						</PhoneWrapper>
					))}
					<NotificationExample />
				</div>
			</div>

			<div className="max-w-screen-sm mx-auto my-7"></div>
		</div>
	);
}
