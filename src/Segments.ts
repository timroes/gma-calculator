import moment, { Moment } from 'moment';

interface Segment {
	country: string;
	from: Moment | null;
	to: Moment | null;
}

export class Segments {

	public readonly segments: Segment[] = [];

	constructor(private defaultCountryCode: string) {
		this.segments.push({ from: null, to: null, country: defaultCountryCode });
	}

	add() {
		const previousTo = this.segments[this.segments.length - 1].to;
		// New segment starts one day after the previous segment
		const startFrom = previousTo ? moment(previousTo).add(1, 'day') : null;

		this.segments.push({
			from: startFrom,
			to: startFrom,
			country: this.defaultCountryCode
		})
	}

	remove(index: number) {
		if (index > 0 && index < this.segments.length) {
			if (this.segments[index + 1] && this.segments[index - 1].to) {
				this.segments[index + 1].from = moment(this.segments[index - 1].to || undefined).add(1, 'day');
			}
			this.segments.splice(index, 1);
		}
	}

	get() {
		return this.segments;
	}

	setRange(index: number, fromRaw: Date, toRaw: Date) {
		if (this.segments[index]) {
			let from = fromRaw ? moment(fromRaw) : null;
			let to = toRaw ? moment(toRaw) : null;

			if (!to || (from && to.isBefore(from))) {
				to = moment(from || undefined);
			}

			this.segments[index].from = from;
			this.segments[index].to = to;

			if (to) {
				// If we have a to date move all following segments, according to that date
				let previousTo = to;
				for (let i = index + 1; i < this.segments.length; i++) {
					const seg = this.segments[i];
					// Set the from date of the next segment to one day after the current to date
					seg.from = moment(previousTo).add(1, 'day');

					// If the to date of that segment has been set already and isn't before
					// the new from date, we are done and can exit the loop. Otherwise we
					// continue moving the to date of that segment and the next segments.
					if (seg.to && !seg.to.isBefore(seg.from)) {
						break;
					}

					// Also move the to date to the current from date, and store that date
					// for the next iteration loop as the previousTo date
					seg.to = moment(seg.from);
					previousTo = seg.to;
				}
			}
		}
	}

	setCountry(index: number, countryCode: string) {
		if (this.segments[index]) {
			this.segments[index].country = countryCode;
		}
	}

	getCountry(index: number) {
		return this.segments[index] ? this.segments[index].country : null;
	}

}
