import React, { Component } from 'react';

import './DateRange.css';

export class DateRange extends Component {

	handleFromChange = (ev) => {
		this.props.onChange(ev.target.value, this.props.to);
	}

	handleToChange = (ev) => {
		this.props.onChange(this.props.from, ev.target.value);
	}

	render() {
		return (<div className={this.props.className}>
			<label className="daterange__label">
				From
				<input
					type="date"
					className="daterange__input"
					value={this.props.from ? this.props.from.format('YYYY-MM-DD') : ''}
					onChange={this.handleFromChange}
					disabled={this.props.disableFrom}
					required="required"/>
			</label>
			<label className="daterange__label">
				To
				<input
					type="date"
					className="daterange__input"
					value={this.props.to ? this.props.to.format('YYYY-MM-DD') : ''}
					min={this.props.from ? this.props.from.format('YYYY-MM-DD') : null}
					onChange={this.handleToChange}
					required="required"/>
			</label>
		</div>);
	}
}
