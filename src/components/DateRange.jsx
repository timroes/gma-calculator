import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './DateRange.css';

export class DateRange extends Component {

	handleFromChange = (value) => {
		this.props.onChange(value, this.props.to);
	}

	handleToChange = (value) => {
		this.props.onChange(this.props.from, value);
	}

	render() {
		return (<div className={this.props.className}>
			<div className="daterange__group">
				<label
					htmlFor={`${this.props.idPrefix}_from`}
					className="daterange__label">
					From
				</label>
				<DatePicker
					id={`${this.props.idPrefix}_from`}
					className="daterange__input"
					value={this.props.from ? this.props.from.format('YYYY-MM-DD') : ''}
					selected={this.props.from}
					onChange={this.handleFromChange}
					disabled={this.props.disableFrom}
					shouldCloseOnSelect={true}
					required="required"/>
			</div>
			<div className="daterange__group">
				<label
					htmlFor={`${this.props.idPrefix}_to`}
					className="daterange__label">
					To
				</label>
				<DatePicker
					id={`${this.props.idPrefix}_to`}
					className="daterange__input"
					value={this.props.to ? this.props.to.format('YYYY-MM-DD') : ''}
					selected={this.props.to}
					minDate={this.props.from}
					onChange={this.handleToChange}
					required="required"/>
			</div>
		</div>);
	}
}
