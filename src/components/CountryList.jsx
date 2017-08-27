import React, { Component } from 'react';
import classnames from 'classnames';
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
		const classes = classnames('countrylist__select', this.props.className);
		return (
			<Select
				className={classes}
				onChange={this.handleChange}
				options={this._options}
				value={this.state.value}
				inputProps={{ id: this.props.id }}
				clearable={false}
			>
			</Select>
		);
	}
}
