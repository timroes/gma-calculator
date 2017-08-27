import moment from 'moment';
import { getRateForCountry } from './rates';
import { getCountryNameByCode } from './countries';

export class CalculationService {

	exclude = {
		breakfast: {},
		lunch: {},
		dinner: {}
	};

	/**
	 * Iterate over each days in the selection.
	 * Calls the provided callback and passes the date as a parameter.
	 */
	forEachDay(segments, callback) {
		if (segments.length < 1) {
			throw new Error('There should always be at least one segment.');
		}

		segments.forEach(segment => {
			if (segment.from) {
				const curDate = moment(segment.from).startOf('day');
				const endDate = moment(segment.to).startOf('day');
				do {
					callback(moment(curDate), segment);
				} while(curDate.add(1, 'days').diff(endDate) <= 0);
			}
		});

	}

	getPriceForDay(day, country, isStartEndDate) {
		// Get the base rates for the specific date and country
		const baseRatesForDay = getRateForCountry(country, day.year());
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

	setExclude(day, type, excluded) {
		this.exclude[type][day.format('YYYY-MM-DD')] = excluded;
	}

	calculate(segments) {
		const days = [];
		let total = 0;

		this.forEachDay(segments, (day, segment) => {
			const dateString = day.format('YYYY-MM-DD');
			const isStartDate = day.isSame(segments[0].from, 'day');
			const isEndDate = day.isSame(segments[segments.length - 1].to, 'day');
			const dayRate = this.getPriceForDay(day, segment.country, isStartDate || isEndDate);
			days.push({
				id: dateString,
				date: day,
				country: segment.country,
				countryName: getCountryNameByCode(segment.country),
				excludeBreakfast: !!this.exclude.breakfast[dateString],
				excludeLunch: !!this.exclude.lunch[dateString],
				excludeDinner: !!this.exclude.dinner[dateString],
				isStartDate,
				isEndDate,
				...dayRate
			});
			total += dayRate.rate;
		});

		return { total, days };
	}

}
