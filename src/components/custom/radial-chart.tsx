'use client';

import { TrendingUp } from 'lucide-react';
import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { cn } from '@/lib/utils';

const chartData = [
	{ browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
];

export function RadialChart({
	variant,
}: {
	variant: 'green' | 'yellow' | 'red';
}) {
	const chartConfig = {
		visitors: {
			label: 'Visitors',
		},
		safari: {
			label: 'Safari',
			color:
				variant === 'green'
					? '#10b981'
					: variant === 'red'
					? '#e11d48'
					: '#f59e0b',
		},
	} satisfies ChartConfig;

	return (
		<Card
			className={cn(
				'flex flex-col bg-gradient-to-tr',
				variant === 'green' &&
					' from-emerald-500/70 via-emerald-500/30 to-emerald-500/70 border-emerald-500 text-gray-800',
				variant === 'yellow' &&
					' from-amber-500/70 via-amber-500/30 to-amber-500/70 border-amber-500 text-gray-800',
				variant === 'red' &&
					' from-red-600/70 via-red-600/30 to-red-600/70 border-red-600 text-gray-800'
			)}
		>
			<CardHeader className="items-center pb-0">
				<CardTitle>Radial Chart - Text</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 pb-0 relative z-10 ">
				<div>
					<ChartContainer
						config={chartConfig}
						className="mx-auto aspect-square max-h-[250px]"
					>
						<RadialBarChart
							data={chartData}
							startAngle={0}
							endAngle={250}
							innerRadius={80}
							outerRadius={110}
						>
							<PolarGrid
								gridType="circle"
								radialLines={false}
								stroke="none"
								className="first:fill-muted last:fill-background"
								polarRadius={[86, 74]}
							/>
							<RadialBar dataKey="visitors" background cornerRadius={10} />
							<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
								<Label
									content={({ viewBox }) => {
										if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
											return (
												<text
													x={viewBox.cx}
													y={viewBox.cy}
													textAnchor="middle"
													dominantBaseline="middle"
												>
													<tspan
														x={viewBox.cx}
														y={viewBox.cy}
														className="fill-foreground text-4xl font-bold"
													>
														{chartData[0].visitors.toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 24}
														className="fill-muted-foreground"
													>
														Last reading 1 min ago
													</tspan>
												</text>
											);
										}
									}}
								/>
							</PolarRadiusAxis>
						</RadialBarChart>
					</ChartContainer>
				</div>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
			</CardFooter>
		</Card>
	);
}
