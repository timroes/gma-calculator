import React, { Component } from 'react';
import Select from 'react-select';
import { getAllCountries } from '../countries';

import './CountryList.css';
import 'react-select/dist/react-select.css';

export class CountryList extends Component {

	constructor(props) {
		super(props);

		this._options = getAllCountries().map(country => ({
			value: country.code,
			label: country.name
		}));

		this.state = {
			value: this.props.defaultValue,
		};
	}

	handleChange = (ev) => {
		this.props.onChange(ev.value);
		this.setState({
			value: ev.value
		});
	}

	render() {
		return (
			<Select
				className="countrylist__select"
				onChange={this.handleChange}
				options={this._options}
				value={this.state.value}
				clearable={false}
			>
			</Select>
		);
	}
}
