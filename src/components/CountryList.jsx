import React, { Component } from 'react';
import Select from 'react-select';
import rates from '../data/rates';

import './CountryList.css';
import 'react-select/dist/react-select.css';

export class CountryList extends Component {

	constructor(props) {
		super(props);
		this._options = rates.map((country, index) => ({
			value: index,
			label: country.name
		}));
		this.state = { value: 0	};
	}

	handleChange = (ev) => {
		this.props.onChange(rates[ev.value]);
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
