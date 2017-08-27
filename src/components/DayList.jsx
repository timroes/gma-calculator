import React, { Component } from 'react';
import './DayList.css';

export class DayList extends Component {

	renderDay = (day) => {
		const onExcludeChange = (type, ev) => {
			this.props.onExcludeChange(day.date, type, ev.target.checked);
		};
		return (<tr key={day.id}>
				<td>{ day.date.format('ddd') }</td>
				<td>
					{ day.date.format('YYYY-MM-DD') }
					{ day.isStartDate && ' (Arrival day)' }
					{ !day.isStartDate && day.isEndDate && ' (Departure day)'}
				</td>
				<td>
					<label className="daylist__exclude-label">
						<input type="checkbox" onChange={onExcludeChange.bind(this, 'breakfast')}/>
						Breakfast
					</label>
					<label className="daylist__exclude-label">
						<input type="checkbox" onChange={onExcludeChange.bind(this, 'lunch')}/>
						Lunch
					</label>
					<label className="daylist__exclude-label">
						<input type="checkbox" onChange={onExcludeChange.bind(this, 'dinner')}/>
						Dinner
					</label>
				</td>
				<td>
					{ day.fallbackFrom &&
						<span>
							<button type="button" className="daylist__warning-icon" role="tooltip" aria-labelledby={`${day.id}-fallbackRate`}></button>
							<div id={`${day.id}-fallbackRate`} className="daylist__warning" aria-hidden="true">
								There are no rates for {day.date.year()} yet. Used rate from {day.fallbackFrom}.
							</div>
						</span>
					}
					{ day.rate.toFixed(2) } €
				</td>
			</tr>);
	}

	render() {
		return (<table className="daylist">
				<thead>
					<tr>
						<th colSpan="2" scope="colgroup">Date</th>
						<th scope="col">
							Meals paid by company
							<button type="button" role="tooltip" className="daylist__info-icon" aria-labelledby="paidmeal-info"></button>
							<div id="paidmeal-info" className="daylist__info" aria-hidden="true">
								Mark each meal, that your company or a colleague paid for (e.g. hotel breakfast).
							</div>
						</th>
						<th scope="col" className="daylist__sum-header">Sum</th>
					</tr>
				</thead>
				<tbody>
				{ this.props.days.map(this.renderDay) }
				</tbody>
			</table>);
	}
}
