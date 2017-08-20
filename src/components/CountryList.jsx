import React, { Component } from 'react';
import rates from '../data/rates';

export class CountryList extends Component {

	renderCountryOption = (country, index) => {
		return <option key={country.code} value={index}>{country.name}</option>;
	}

	handleChange = (ev) => {
		this.props.onChange(rates[ev.target.value]);
	}

	render() {
		return (
			<select id="country" onChange={this.handleChange}>
				{ rates.map(this.renderCountryOption) }
			</select>
		);
	}
}
