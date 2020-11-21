// @ts-ignore
import pdfmake from 'pdfmake/build/pdfmake.js';
// @ts-ignore
import vfsFonts from 'pdfmake/build/vfs_fonts.js';
import { getCountryNameByCode } from './countries';
import { CalculationService, Day } from './CalculationService';
import { Segments, Segment } from './Segments';

// Hack to get this working with webpack (see https://github.com/bpampuch/pdfmake/issues/939#issuecomment-318846576)
pdfmake.vfs = vfsFonts.pdfMake.vfs;

export class PdfExporter {

	constructor(private calculationService: CalculationService, private segments: Segments) { }

	private getDayRowDefinition(day: Day) {
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

	private generateCountryList(segments: Segment[]) {
		const countries = segments.reduce<string[]>((countries, segment) => {
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

	private generateDocDefinition(segments: Segment[], result: ReturnType<CalculationService['calculate']>) {
		const docDef = {
			content: [
				{ text: 'German Meal Allowance', style: 'header' },
				{ text: 'Locations:', style: 'location' },
				this.generateCountryList(segments),
				{
					table: {
						body: [
							[ 'Date', 'Location', 'Base Rate', 'Meals paid by company', 'Rate' ],
							...result.days.map(this.getDayRowDefinition),
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
		if (result.days.filter((day: Day) => day.fallbackFrom).length > 0) {
			docDef.content.push({
				text: '* The rates for this year have not yet been published. Rates from previous years have been used for these dates.',
				style: 'fallbackWarning'
			});
		}

		return docDef;
	}

	private getFilename(segments: Segment[], result: ReturnType<CalculationService['calculate']>) {
		const from = segments[0].from;
		const to = segments[segments.length - 1].to;
		if (!from || !to) {
			throw new Error('The downloader was called without a valid segment. This should not happen.');
		}
		const start = from.format('YYYY-MM-DD');
		const end = to.format('YYYY-MM-DD');
		const countries = segments.map(s => s.country.split('_')[0]).join('-');

		return `gma_${start}_${end}_${countries}_EUR${result.total.toFixed(2).replace('.', '-')}.pdf`;
	}

	download() {
		const segments = this.segments.get();
		const result = this.calculationService.calculate(segments);
		const filename = this.getFilename(segments, result);
		pdfmake.createPdf(this.generateDocDefinition(segments, result)).download(filename);
	}
}
