import moment from 'moment';
import { getRateForCountry } from './rates';

export class CalculationService {

	exclude = {
		breakfast: {},
		lunch: {},
		dinner: {}
	};

	set to(val) {
		this._to = val ? moment(val) : null;
		this.update();
	}

	set from(val) {
		this._from = val ? moment(val) : null;
		this.update();
	}

	setCountry(countryCode) {
		this._country = countryCode;
		this.update();
	}

	getCountry() {
		return this._country;
	}

	/**
	 * Iterate over each days in the selection.
	 * Calls the provided callback and passes the date as a parameter.
	 */
	forEachDay(callback) {
		if (this._from) {
			const curDate = moment(this._from).startOf('day');
			const endDate = moment(this._to || this._from).startOf('day');
			do {
				callback(moment(curDate));
			} while(curDate.add(1, 'days').diff(endDate) <= 0);
		}
	}

	getPriceForDay(day, isStartEndDate) {
		if (!this._country) {
			return 0;
		}
		// Get the base rates for the specific date and country
		const baseRatesForDay = getRateForCountry(this._country, day.year());
		const baseRate = isStartEndDate ? baseRatesForDay.reduced : baseRatesForDay.full;
		let price = baseRate;
		const id = day.format('YYYY-MM-DD');
		if (this.exclude.breakfast[id]) {
			price -= baseRatesForDay.full * 0.2;
		}
		if (this.exclude.lunch[id]) {
			price -= baseRatesForDay.full * 0.4;
		}
		if (this.exclude.dinner[id]) {
			price -= baseRatesForDay.full * 0.4;
		}
		return {
			baseRate,
			rate: Math.max(price, 0),
			fallbackFrom: baseRatesForDay.fallbackFrom
		};
	}

	update() {
		this.dayList = [];
		this.total = 0;

		this.forEachDay(day => {
			const dateString = day.format('YYYY-MM-DD');
			const isStartDate = day.isSame(this._from, 'day');
			const isEndDate = day.isSame(this._to, 'day');
			const dayRate = this.getPriceForDay(day, isStartDate || isEndDate);
			this.dayList.push({
				id: dateString,
				date: day,
				excludeBreakfast: !!this.exclude.breakfast[dateString],
				excludeLunch: !!this.exclude.lunch[dateString],
				excludeDinner: !!this.exclude.dinner[dateString],
				isStartDate,
				isEndDate,
				...dayRate
			});
			this.total += dayRate.rate;
		});
	}

	setExclude(day, type, excluded) {
		this.exclude[type][day.format('YYYY-MM-DD')] = excluded;
		this.update();
	}

}
