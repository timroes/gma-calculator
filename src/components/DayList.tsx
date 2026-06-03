import React, { Component } from 'react';
import { Moment } from 'moment';
import { Info, TriangleAlert } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ExcludeOption, Day } from '../CalculationService';
import { Checkbox } from './ui/checkbox';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { rates } from '../rates';

interface DayListProps {
	days: Day[];
	showCountries: boolean;
	onExcludeChange: (date: Moment, type: ExcludeOption, excluded: boolean) => void;
}

type HintAlign = 'left' | 'center' | 'right';

function HintIcon({
	variant,
	align = 'center',
	label,
	children,
}: {
	variant: 'info' | 'warning';
	align?: HintAlign;
	label: string;
	children: React.ReactNode;
}) {
	const Icon = variant === 'warning' ? TriangleAlert : Info;
	const contentAlign = align === 'left' ? 'start' : align === 'right' ? 'end' : 'center';
	return (
		<HoverCard openDelay={150}>
			<HoverCardTrigger asChild>
				<button
					type="button"
					aria-label={label}
					className={cn(
						'inline-flex cursor-help items-center justify-center rounded-full align-middle outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
						variant === 'warning' ? 'text-amber-500' : 'text-muted-foreground hover:text-foreground',
					)}
				>
					<Icon className="size-4" />
				</button>
			</HoverCardTrigger>
			<HoverCardContent align={contentAlign} className="w-52 p-2 text-xs leading-snug font-normal">
				{children}
			</HoverCardContent>
		</HoverCard>
	);
}

// On narrow screens (< md) the table collapses into stacked cards: the row
// becomes a flex container, cells lose their padding, and the meals cell wraps
// onto its own full-width line below the rest.
const cell = 'px-4 py-2.5 align-middle max-md:p-0 max-md:text-left';

export class DayList extends Component<DayListProps> {
	renderDay = (day: Day) => {
		const onExcludeChange = (type: ExcludeOption, checked: boolean | 'indeterminate') => {
			this.props.onExcludeChange(day.date, type, checked === true);
		};

		const meals: Array<{ type: ExcludeOption; label: string; checked: boolean }> = [
			{ type: 'breakfast', label: 'Breakfast', checked: day.excludeBreakfast },
			{ type: 'lunch', label: 'Lunch', checked: day.excludeLunch },
			{ type: 'dinner', label: 'Dinner', checked: day.excludeDinner },
		];

		const flag = rates.countries[day.country].flag ?? day.country.substring(0, 2).toLowerCase();

		return (
			<tr
				key={day.id}
				className="border-b border-border transition-colors hover:bg-muted/40 max-md:flex max-md:flex-wrap max-md:items-center max-md:gap-x-2 max-md:gap-y-2 max-md:px-4 max-md:py-3"
			>
				{this.props.showCountries && (
					<td className={cn(cell, 'text-center max-md:text-left')}>
						<Tooltip>
							<TooltipTrigger asChild>
								<span
									tabIndex={0}
									role="img"
									aria-label={rates.countries[day.country].names.en}
									className={`fi fi-${flag} rounded-[2px] outline-none focus-visible:ring-2 focus-visible:ring-ring/50`}
								/>
							</TooltipTrigger>
							<TooltipContent side="right" avoidCollisions={false}>
								{rates.countries[day.country].names.en}
							</TooltipContent>
						</Tooltip>
					</td>
				)}
				<td className={cn(cell, 'font-medium')}>{day.date.format('ddd')}</td>
				<td className={cn(cell, 'whitespace-nowrap')}>
					<span className="tabular-nums">{day.date.format('YYYY-MM-DD')}</span>
					{day.isStartDate && (
						<span className="ml-2 rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
							Arrival
						</span>
					)}
					{!day.isStartDate && day.isEndDate && (
						<span className="ml-2 rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
							Departure
						</span>
					)}
				</td>
				<td className={cn(cell, 'max-md:order-last max-md:w-full')}>
					<div className="flex flex-wrap gap-x-5 gap-y-1.5">
						{meals.map((meal) => (
							<label key={meal.type} className="inline-flex cursor-pointer items-center gap-2">
								<Checkbox
									checked={meal.checked}
									onCheckedChange={onExcludeChange.bind(this, meal.type)}
								/>
								{meal.label}
							</label>
						))}
					</div>
				</td>
				<td className={cn(cell, 'whitespace-nowrap text-right font-medium tabular-nums max-md:ml-auto')}>
					<span className="inline-flex items-center justify-end gap-1.5">
						{day.fallbackFrom && (
							<HintIcon variant="warning" align="right" label="Rate warning">
								There are no rates for {day.date.year()} yet. Used rate from {day.fallbackFrom}.
							</HintIcon>
						)}
						{day.replacedByCountry && (
							<HintIcon variant="warning" align="right" label="Country replaced">
								This location has been replaced by "
								{rates.countries[day.replacedByCountry].names.en}". Please use this country instead.
							</HintIcon>
						)}
						{!day.replacedByCountry && day.countryWithoutRate && (
							<HintIcon variant="warning" align="right" label="No official rate">
								This location had no official rate for this year. It might have been added in later
								years to the list, or might have been removed from the list. Please use another
								location.
							</HintIcon>
						)}
						<span>{day.rate.toFixed(2)} €</span>
					</span>
				</td>
			</tr>
		);
	};

	render() {
		return (
			<table className="w-full border-collapse text-sm">
				<thead className="max-md:hidden">
					<tr className="border-b border-border text-left text-xs font-medium tracking-wide text-muted-foreground uppercase">
						{this.props.showCountries && (
							<th scope="col" className="px-4 py-2 font-medium">
								<span className="sr-only">Country</span>
							</th>
						)}
						<th colSpan={2} scope="colgroup" className="px-4 py-2 font-medium">
							Date
						</th>
						<th scope="col" className="px-4 py-2 font-medium">
							<HoverCard openDelay={300}>
								<HoverCardTrigger asChild>
									<button
										type="button"
										className="cursor-help uppercase tracking-wide underline decoration-muted-foreground/50 decoration-dotted underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
									>
										Meals paid by company
									</button>
								</HoverCardTrigger>
								<HoverCardContent align="start" className="text-sm font-normal normal-case tracking-normal">
									<p className="font-medium text-foreground">Mark company-paid meals</p>
									<p className="mt-1 text-muted-foreground">
										Check each meal that your company or a colleague paid for (e.g. hotel
										breakfast) so it gets deducted from the allowance.
									</p>
								</HoverCardContent>
							</HoverCard>
						</th>
						<th scope="col" className="px-4 py-2 text-right font-medium">
							Sum
						</th>
					</tr>
				</thead>
				<tbody className="max-md:block">{this.props.days.map(this.renderDay)}</tbody>
			</table>
		);
	}
}
