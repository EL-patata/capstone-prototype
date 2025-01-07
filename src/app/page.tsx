import PhoneWrapper from '@/components/custom/phone-wrapper';
import { RadialChart } from '@/components/custom/radial-chart';
import ChatBot from '@/components/pages/chat-bot';
import { Login } from '@/components/pages/login';
import { SignIn } from '@/components/pages/signin';

export default function page() {
	return (
		<div>
			<div className="flex min-h-svh w-full justify-center p-6 md:p-10">
				<div className="flex flex-col gap-3 w-full max-w-[26rem] bg-slate-100 p-4 rounded">
					<Login />

					<SignIn />

					<PhoneWrapper>
						<ChatBot />
					</PhoneWrapper>

					<PhoneWrapper>
						<RadialChart variant="green" />
					</PhoneWrapper>

					<PhoneWrapper>
						<RadialChart variant="yellow" />
					</PhoneWrapper>

					<PhoneWrapper>
						<RadialChart variant="red" />
					</PhoneWrapper>
				</div>
			</div>
			<div className="max-w-screen-sm mx-auto my-7"></div>
		</div>
	);
}
