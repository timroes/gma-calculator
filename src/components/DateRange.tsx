import React from 'react';
import DatePicker from 'react-datepicker';
import { Moment } from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './DateRange.css';

interface DateRangeProps {
	to?: Moment;
	from?: Moment;
	className?: string;
	disableFrom: boolean;
	idPrefix: string;
	onChange: (from: Date | null, to: Date | null) => void;
}

export function DateRange(props: DateRangeProps) {
	return (
		<div className={props.className}>
			<div className="daterange__group">
				<label
					htmlFor={`${props.idPrefix}_from`}
					className="daterange__label">
					From
				</label>
				<DatePicker
					id={`${props.idPrefix}_from`}
					className="daterange__input"
					autoComplete="off"
					value={props.from ? props.from.format('YYYY-MM-DD') : ''}
					selected={props.from ? props.from.toDate() : undefined}
					onChange={(date) => props.onChange(date as Date | null, props.to ? props.to.toDate() : null)}
					disabled={props.disableFrom}
					shouldCloseOnSelect={true}
					required={true}/>
			</div>
			<div className="daterange__group">
				<label
					htmlFor={`${props.idPrefix}_to`}
					className="daterange__label">
					To
				</label>
				<DatePicker
					id={`${props.idPrefix}_to`}
					className="daterange__input"
					autoComplete="off"
					value={props.to ? props.to.format('YYYY-MM-DD') : ''}
					selected={props.to ? props.to.toDate() : undefined}
					minDate={props.from ? props.from.toDate() : undefined}
					onChange={(date) => props.onChange(props.from ? props.from.toDate() : null, date as Date | null)}
					required={true}/>
			</div>
		</div>
	);
}
