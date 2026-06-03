import * as React from 'react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Field } from './ui/field';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface DatePickerProps {
	id?: string;
	label: string;
	value?: Date;
	onChange: (date: Date | undefined) => void;
	disabled?: boolean;
	minDate?: Date;
	className?: string;
	placeholder?: string;
}

export function DatePicker({
	id,
	label,
	value,
	onChange,
	disabled,
	minDate,
	className,
	placeholder = 'Select date',
}: DatePickerProps) {
	const [open, setOpen] = React.useState(false);
	return (
		<Field label={label} htmlFor={id} className={className}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					id={id}
					type="button"
					disabled={disabled}
					className={cn(
						'w-full cursor-pointer bg-transparent text-left text-sm outline-none',
						'disabled:cursor-not-allowed disabled:text-muted-foreground',
						!value && 'text-muted-foreground',
					)}
				>
					{value ? format(value, 'PP') : placeholder}
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={value}
						defaultMonth={value ?? minDate}
						onSelect={(date) => {
							onChange(date);
							setOpen(false);
						}}
						disabled={minDate ? { before: minDate } : undefined}
						autoFocus
					/>
				</PopoverContent>
			</Popover>
		</Field>
	);
}
