import React from 'react';
import { Moment } from 'moment';

import { DatePicker } from './DatePicker';

interface DateRangeProps {
	to?: Moment;
	from?: Moment;
	className?: string;
	disableFrom: boolean;
	idPrefix: string;
	onChange: (from: Date | null, to: Date | null) => void;
}

export function DateRange(props: DateRangeProps) {
	const fromDate = props.from ? props.from.toDate() : undefined;
	const toDate = props.to ? props.to.toDate() : undefined;
	return (
		<div className={`${props.className ?? ''} sm:flex sm:gap-4`}>
			<DatePicker
				className="mt-4 sm:mt-0 sm:flex-1"
				id={`${props.idPrefix}_from`}
				label="From"
				value={fromDate}
				disabled={props.disableFrom}
				onChange={(date) => props.onChange(date ?? null, toDate ?? null)}
			/>
			<DatePicker
				className="mt-4 sm:mt-0 sm:flex-1"
				id={`${props.idPrefix}_to`}
				label="To"
				value={toDate}
				minDate={fromDate}
				onChange={(date) => props.onChange(fromDate ?? null, date ?? null)}
			/>
		</div>
	);
}
