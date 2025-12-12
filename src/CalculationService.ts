import moment from 'moment';
import { getRateForCountry } from './rates';
import { Segment } from './Segments';

export type ExcludeOption = 'breakfast' | 'lunch' | 'dinner';

export interface Day {
	id: string;
	country: string;
	date: moment.Moment;
	excludeBreakfast: boolean;
	excludeLunch: boolean;
	excludeDinner: boolean;
	isStartDate: boolean;
	isEndDate: boolean;
	rate: number;
	baseRate: number;
	fallbackFrom?: number;
	countryWithoutRate: boolean;
	replacedByCountry?: string;
}

interface ExcludeMap {
	breakfast: { [date: string]: boolean };
	lunch: { [date: string]: boolean };
	dinner: { [date: string]: boolean };
}

export class CalculationService {

	private exclude: ExcludeMap = {
		breakfast: {},
		lunch: {},
		dinner: {}
	};

	/**
	 * Iterate over each days in the selection.
	 * Calls the provided callback and passes the date as a parameter.
	 */
	forEachDay(segments: Segment[], callback: (date: moment.Moment, segment: Segment) => void) {
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

	getPriceForDay(day: moment.Moment, country: string, isStartEndDate: boolean) {
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
			fallbackFrom: baseRatesForDay.fallbackFrom,
			countryWithoutRate: baseRatesForDay.full === 0,
			replacedByCountry: baseRatesForDay.replacedByCountry
		};
	}

	setExclude(day: moment.Moment, type: ExcludeOption, excluded: boolean) {
		this.exclude[type][day.format('YYYY-MM-DD')] = excluded;
	}

	calculate(segments: Segment[]): { total: number, days: Day[] } {
		const days: Day[] = [];
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
