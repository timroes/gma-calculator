import React, { Component } from 'react';
import moment from 'moment';

import './DateRange.css';

export class DateRange extends Component {

	constructor(props) {
		super(props);
		this.state = {
			minTo: null,
			fromValue: '',
			toValue: ''
		};
	}

	onChange = (from, to) => {
		this.props.onChange({
			from,
			to,
			invalid: !from || !to
		});
	}

	handleFromChange = (ev) => {
		const fromValue = ev.target.value;
		let toValue = this.state.toValue;

		// If "to" value hasn't been set yet or it is before then the new "from",
		// set it to the same value as "from"
		if (!toValue || moment(toValue).isBefore(fromValue)) {
			toValue = fromValue;
			this.setState({ toValue });
		}

		this.setState({
			fromValue,
			minTo: fromValue
		});

		this.onChange(fromValue, toValue);
	}

	handleToChange = (ev) => {
		const toValue = ev.target.value || this.state.fromValue;
		this.setState({ toValue });
		this.onChange(this.state.fromValue, toValue);
	}

	render() {
		return (<div className={this.props.className}>
			<label className="daterange__label">
				From
				<input
					type="date"
					className="daterange__input"
					value={this.state.fromValue}
					onChange={this.handleFromChange}
					required="required"/>
			</label>
			<label className="daterange__label">
				To
				<input
					type="date"
					className="daterange__input"
					value={this.state.toValue}
					min={this.state.minTo}
					onChange={this.handleToChange}
					required="required"/>
			</label>
		</div>);
	}
}
