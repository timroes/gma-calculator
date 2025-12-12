import React, { useMemo } from 'react';
import classnames from 'classnames';
import Select, { components } from 'react-select';

import './CountryList.css';
import 'flag-icons/css/flag-icons.min.css';
import { rates } from '../rates';

interface CountryListProps {
	className?: string;
	onChange: (country: string) => void;
	id: string;
	value: string;
}

export function CountryList(props: CountryListProps) {
	const classes = classnames('countrylist__select', props.className);
	const countries = useMemo(() => {
		return Object.entries(rates.countries)
			.map(([code, info]) => ({ value: code, label: info.replaced ? `${info.names.en} (use "${rates.countries[info.replaced.by].names.en}" from ${info.replaced.since}+)` : info.names.en, flag: info.flag ?? code.substring(0, 2).toLocaleLowerCase() }))
			.sort((a, b) => a.label.localeCompare(b.label));
	}, []);
	const value = useMemo(() => countries.find(value => value.value === props.value), [countries, props.value]);
	return (
		<Select
			className={classes}
			onChange={(value) => value && props.onChange(value.value)}
			options={countries}
			value={value}
			inputId={props.id}
			isClearable={false}
			isMulti={false}
			components={{ 
				Option: (props) => (
					<components.Option {...props}>
						<span className={classnames('countrylist__icon', 'fi', `fi-${props.data.flag}`)} />
						{props.label}
					</components.Option>
				),
				SingleValue: (props) => (
					<components.SingleValue {...props}>
						<span className={classnames('countrylist__icon', 'fi', `fi-${props.data.flag}`)} />
						{props.children}
					</components.SingleValue>
				)
			}}
		/>
	);
}
