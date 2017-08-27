import pdfmake from 'pdfmake/build/pdfmake.js';
import vfsFonts from 'pdfmake/build/vfs_fonts.js';
import { getCountryNameByCode } from './countries';

// Hack to get this working with webpack (see https://github.com/bpampuch/pdfmake/issues/939#issuecomment-318846576)
pdfmake.vfs = vfsFonts.pdfMake.vfs;

export class PdfExporter {

	constructor(calculationService, segments) {
		this.calculationService = calculationService;
		this.segments = segments;
	}

	_getDayRowDefinition(day) {
		const paidMeals = [
			day.excludeBreakfast ? `Breakfast` : null,
			day.excludeLunch ? `Lunch` : null,
			day.excludeDinner ? 'Dinner' : null
		].filter(el => !!el).join(', ');
		return [
			day.date.format('YYYY-MM-DD (ddd)'),
			day.country,
			{ text: `${day.baseRate.toFixed(2)} EUR`, style: 'rate' },
			paidMeals,
			{ text: `${day.rate.toFixed(2)} EUR${day.fallbackFrom ? '*' : ''}`, style: 'rate' }
		];
	}

	_generateCountryList(segments) {
		const countries = segments.reduce((countries, segment) => {
			if (countries.indexOf(segment.country) === -1) {
				countries.push(segment.country);
			}
			return countries;
		}, []);

		const countryStrings = countries.map(c => `${getCountryNameByCode(c)} (${c})`);
		countryStrings.sort();

		return {
			ul: countryStrings,
			style: 'locationList'
		};
	}

	_generateDocDefinition() {
		const segments = this.segments.get();
		const result = this.calculationService.calculate(segments);
		const docDef = {
			content: [
				{ text: 'German Meal Allowance', style: 'header' },
				{ text: 'Locations:', style: 'location' },
				this._generateCountryList(segments),
				{
					table: {
						body: [
							[ 'Date', 'Location', 'Base Rate', 'Meals paid by company', 'Rate' ],
							...result.days.map(this._getDayRowDefinition),
							[
								{ text: 'Total', 'colSpan': 4, style: 'total' },
								'',
								'',
								'',
								{ text: `${result.total.toFixed(2)} EUR`, style: 'total' }
							]
						]
					}
				}
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
					margin: [0, 0, 0, 10]
				},
				total: {
					bold: true,
					alignment: 'right'
				},
				list: {
					margin: [0, 0, 0, 10]
				},
				location: {
					bold: true
				},
				locationList: {
					margin: [0, 0, 0, 8]
				},
				rate: {
					alignment: 'right'
				},
				fallbackWarning: {
					bold: true,
					color: 'red',
					margin: [0, 10, 0, 0]
				}
			},
			defaultStyle: {
				lineHeight: 1.3
			}
		};

		// If any day used a fallback rate, show a warning below the table.
		if (result.days.filter(day => day.fallbackFrom).length > 0) {
			docDef.content.push({
				text: '* No rates for this year yet. Used older rates for these dates.',
				style: 'fallbackWarning'
			});
		}

		return docDef;
	}

	download() {
		pdfmake.createPdf(this._generateDocDefinition()).download('gma.pdf');
	}
}
