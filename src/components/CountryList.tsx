import React, { useMemo } from 'react';
import classnames from 'classnames';
import Select from 'react-select';
import { getAllCountries } from '../countries';

import './CountryList.css';

interface CountryListProps {
	className?: string;
	onChange: (country: string) => void;
	id: string;
	value: string;
}

export function CountryList(props: CountryListProps) {
	const classes = classnames('countrylist__select', props.className);
	const countries = useMemo(() => getAllCountries().map(country => ({ value: country.code, label: country.name })), []);
	const value = useMemo(() => countries.find(value => value.value === props.value), [countries, props.value]);
	return (
		<Select
			className={classes}
			onChange={(value: any) => value && props.onChange(value.value)}
			options={countries}
			value={value}
			inputProps={{ id: props.id }}
			clearable={false}
			isMulti={false}
		/>
	);
}
