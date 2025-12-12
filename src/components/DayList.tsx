import React, { Component } from 'react';
import { Moment } from 'moment';
import { ExcludeOption, Day } from '../CalculationService';
import './DayList.css';
import { rates } from '../rates';

interface DayListProps {
	days: Day[];
	showCountries: boolean;
	onExcludeChange: (date: Moment, type: ExcludeOption, excluded: boolean) => void;
}

export class DayList extends Component<DayListProps> {

	renderDay = (day: Day) => {
		const onExcludeChange = (type: ExcludeOption, ev: React.ChangeEvent<HTMLInputElement>) => {
			this.props.onExcludeChange(day.date, type, ev.target.checked);
		};
		return (<tr key={day.id}>
				{ this.props.showCountries &&
					<td>
						<abbr className="daylist__country" title={rates.countries[day.country].names.en}>{day.country}</abbr>
					</td>
				}
				<td>{ day.date.format('ddd') }</td>
				<td>
					{ day.date.format('YYYY-MM-DD') }
					{ day.isStartDate && ' (Arrival day)' }
					{ !day.isStartDate && day.isEndDate && ' (Departure day)'}
				</td>
				<td>
					<label className="daylist__exclude-label">
						<input type="checkbox" onChange={onExcludeChange.bind(this, 'breakfast')} checked={day.excludeBreakfast}/>
						Breakfast
					</label>
					<label className="daylist__exclude-label">
						<input type="checkbox" onChange={onExcludeChange.bind(this, 'lunch')} checked={day.excludeLunch}/>
						Lunch
					</label>
					<label className="daylist__exclude-label">
						<input type="checkbox" onChange={onExcludeChange.bind(this, 'dinner')} checked={day.excludeDinner}/>
						Dinner
					</label>
				</td>
				<td className="daylist__rate">
					{day.fallbackFrom &&
						<span>
							<button type="button" className="daylist__warning-icon" role="tooltip" aria-labelledby={`${day.id}-fallbackRate`}></button>
							<div id={`${day.id}-fallbackRate`} className="daylist__warning" aria-hidden="true">
								There are no rates for {day.date.year()} yet. Used rate from {day.fallbackFrom}.
							</div>
						</span>
					}
					{day.replacedByCountry && (
						<span>
							<button type="button" className='daylist__warning-icon' role="tooltip" aria-labelledby={`${day.id}-replacedBy`}></button>
							<div id={`${day.id}-replacedBy`} className="daylist__warning" aria-hidden="true">
								This location has been replaced by "{rates.countries[day.replacedByCountry].names.en}". Please use this country instead.
							</div>
						</span>
					)}
					{!day.replacedByCountry && day.countryWithoutRate &&
						<span>
							<button type="button" className="daylist__warning-icon" role="tooltip" aria-labelledby={`${day.id}-fallbackRate`}></button>
							<div id={`${day.id}-fallbackRate`} className="daylist__warning" aria-hidden="true">
								This location had no official rate for this year. It might have been added in later years to
								the list, or might have been removed from the list. Please use another location.
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
						{this.props.showCountries &&
							<th scope="col">Country</th>
						}
						<th colSpan={2} scope="colgroup">Date</th>
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
