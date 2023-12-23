import React, { useMemo } from 'react';
import classnames from 'classnames';
import Select, { components } from 'react-select';
import { getAllCountries } from '../countries';

import './CountryList.css';
import 'flag-icon-css/css/flag-icons.css';

interface CountryListProps {
	className?: string;
	onChange: (country: string) => void;
	id: string;
	value: string;
}

export function CountryList(props: CountryListProps) {
	const classes = classnames('countrylist__select', props.className);
	const countries = useMemo(() => getAllCountries().map(country => ({ value: country.code, label: country.name, flag: country.flag ?? country.code.substring(0, 2).toLocaleLowerCase() })), []);
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
						<span className={classnames('countrylist__icon', 'flag-icon', `flag-icon-${props.data.flag}`)} />
						{props.label}
					</components.Option>
				),
				SingleValue: (props) => (
					<components.SingleValue {...props}>
						<span className={classnames('countrylist__icon', 'flag-icon', `flag-icon-${props.data.flag}`)} />
						{props.children}
					</components.SingleValue>
				)
			}}
		/>
	);
}
