import React, { useMemo, useRef } from 'react';

import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from './ui/combobox';
import { InputGroupAddon } from './ui/input-group';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { rates } from '../rates';
import 'flag-icons/css/flag-icons.min.css';

interface CountrySelectProps {
	onChange: (country: string) => void;
	id: string;
	value: string;
	showLegacyRegions: boolean;
}

interface CountryOption {
	value: string;
	label: string;
	hint?: string;
	flag: string;
	struck: boolean;
}

function Flag({ code }: { code: string }) {
	return (
		<span
			className={`fi fi-${code} rounded-xs shrink-0`}
			aria-hidden="true"
		/>
	);
}

export function CountrySelect(props: CountrySelectProps) {
	const anchorRef = useRef<HTMLDivElement>(null);

	// Select the whole current value when the field is focused, so the user can
	// immediately type to search for a different country. Deferred past the
	// click's mouseup, which would otherwise collapse the selection to a cursor.
	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		const input = event.currentTarget;
		requestAnimationFrame(() => input.select());
	};

	const countries = useMemo<CountryOption[]>(() => {
		const currentYear = new Date().getFullYear();
		return Object.entries(rates.countries)
			.filter(([code, info]) => {
				// "Legacy" regions were replaced before the current year, so they were
				// not valid this year or last year. Hide them by default unless the
				// user opted to show them — but always keep the currently selected
				// region visible so its value never silently disappears.
				const isLegacy = info.replaced != null && info.replaced.since < currentYear;
				return !isLegacy || props.showLegacyRegions || code === props.value;
			})
			.map(([code, info]) => ({
				value: code,
				label: info.names.en,
				hint: info.replaced
					? `Use "${rates.countries[info.replaced.by].names.en}" from ${info.replaced.since} onwards instead.`
					: undefined,
				flag: info.flag ?? code.substring(0, 2).toLowerCase(),
				// Replaced as of the current year (and therefore every later year too).
				struck: info.replaced != null && currentYear >= info.replaced.since,
			}))
			.sort((a, b) => a.label.localeCompare(b.label));
	}, [props.showLegacyRegions, props.value]);

	const selected = useMemo(
		() => countries.find((c) => c.value === props.value) ?? null,
		[countries, props.value],
	);

	return (
		<Combobox
			items={countries}
			value={selected}
			onValueChange={(c: CountryOption | null) => {
				if (c) {
					props.onChange(c.value);
				}
			}}
			itemToStringLabel={(c: CountryOption) => c.label}
			itemToStringValue={(c: CountryOption) => c.value}
		>
			<div ref={anchorRef} className="w-full">
				{/* Borderless so the surrounding notched Field provides the outline. */}
				<ComboboxInput
					id={props.id}
					onFocus={handleFocus}
					placeholder="Select country…"
					className="h-auto rounded-none border-0 bg-transparent pl-3 pr-0.5 shadow-none has-[[data-slot=input-group-control]:focus-visible]:ring-0 [&_[data-slot=input-group-control]]:h-auto [&_[data-slot=input-group-control]]:pt-3 [&_[data-slot=input-group-control]]:pb-2"
				>
					{selected && (
						<InputGroupAddon align="inline-start" className="pl-0 pt-3 pb-2">
							<Flag code={selected.flag} />
						</InputGroupAddon>
					)}
				</ComboboxInput>
			</div>
			<ComboboxContent anchor={anchorRef}>
				<ComboboxEmpty>No country found.</ComboboxEmpty>
				<ComboboxList>
					{(country: CountryOption) => (
						<ComboboxItem key={country.value} value={country}>
							<Flag code={country.flag} />
							{country.hint ? (
								<Tooltip>
									<TooltipTrigger asChild>
										<span className={`flex-1 truncate ${country.struck ? 'line-through' : ''}`}>
											{country.label}
										</span>
									</TooltipTrigger>
									<TooltipContent side="right">{country.hint}</TooltipContent>
								</Tooltip>
							) : (
								<span className="flex-1 truncate">{country.label}</span>
							)}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	);
}
