import moment from 'moment';

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

	set country(val) {
		this._country = val;
		this._full = val.full;
		this._reduced = val.reduced;
		this._reduceBreakfast = val.full * 0.2;
		this._reduceLunch = val.full * 0.4;
		this._reduceDinner = val.full * 0.4;
		this.update();
	}

	get countryName() {
		return this._country.name;
	}

	get deductions() {
		return {
			breakfast: this._reduceBreakfast,
			lunch: this._reduceLunch,
			dinner: this._reduceDinner
		};
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
		const baseRate = isStartEndDate ? this._reduced : this._full;
		let price = baseRate;
		const id = day.format('YYYY-MM-DD');
		if (this.exclude.breakfast[id]) {
			price -= this._reduceBreakfast;
		}
		if (this.exclude.lunch[id]) {
			price -= this._reduceLunch;
		}
		if (this.exclude.dinner[id]) {
			price -= this._reduceDinner;
		}
		return {
			baseRate,
			rate: Math.max(price, 0)
		};
	}

	update() {
		this.dayList = [];
		this.total = 0;

		this.forEachDay(day => {
			const dateString = day.format('YYYY-MM-DD');
			const isStartDate = day.isSame(this._from, 'day');
			const isEndDate = day.isSame(this._to, 'day');
			const { rate, baseRate } = this.getPriceForDay(day, isStartDate || isEndDate);
			this.dayList.push({
				id: dateString,
				date: day,
				excludeBreakfast: !!this.exclude.breakfast[dateString],
				excludeLunch: !!this.exclude.lunch[dateString],
				excludeDinner: !!this.exclude.dinner[dateString],
				isStartDate,
				isEndDate,
				baseRate,
				rate
			});
			this.total += rate;
		});
	}

	setExclude(day, type, excluded) {
		this.exclude[type][day.format('YYYY-MM-DD')] = excluded;
		this.update();
	}

}
