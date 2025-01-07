'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, SendHorizonal, User } from 'lucide-react';
import { useState } from 'react';

type Message = {
	text: string;
	sender: 'user' | 'bot';
};

export default function ChatBot() {
	const [messages] = useState<Message[]>([
		{ text: 'Mock response sent from bot', sender: 'bot' },
		{ text: 'Mock message sent from user', sender: 'user' },
		{ text: 'Short response', sender: 'bot' },
		{
			text: 'Long message sent to the chat bot from the user ',
			sender: 'user',
		},
		{ text: 'Another short response', sender: 'bot' },
		{ text: 'Short message', sender: 'user' },
		{
			text: 'Long message sent to the user from the chat bot ',
			sender: 'bot',
		},
		{ text: 'Mock response sent from bot', sender: 'bot' },
		{ text: 'Mock message sent from user', sender: 'user' },
		{ text: 'Short response', sender: 'bot' },
	]);

	return (
		<div className="w-full max-w-md mx-auto h-[650px] my-2 flex flex-col">
			<div className="max-h-[550px] pr-2 py-2 overflow-hidden">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`flex ${
							message.sender === 'user' ? 'justify-end' : 'justify-start'
						} mb-4`}
					>
						<div
							className={`flex items-start ${
								message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
							}`}
						>
							<Avatar className="w-8 h-8 mt-auto">
								<AvatarFallback>
									{message.sender === 'user' ? <User /> : <Bot />}
								</AvatarFallback>
							</Avatar>
							<div
								className={`mx-2 p-3 rounded-lg ${
									message.sender === 'user'
										? 'bg-primary text-primary-foreground'
										: 'bg-accent text-foreground'
								}`}
							>
								{message.text}
							</div>
						</div>
					</div>
				))}
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="flex w-full items-center space-x-2 mt-auto"
			>
				<Input type="text" placeholder="Type your message..." />
				<Button type="submit" size="icon">
					<SendHorizonal className="" />
				</Button>
			</form>
		</div>
	);
}
