import pdfmake from 'pdfmake/build/pdfmake.js';
import vfsFonts from 'pdfmake/build/vfs_fonts.js';
import { getCountryNameByCode } from './countries';

// Hack to get this working with webpack (see https://github.com/bpampuch/pdfmake/issues/939#issuecomment-318846576)
pdfmake.vfs = vfsFonts.pdfMake.vfs;

export class PdfExporter {

	constructor(calculationService) {
		this.calculationService = calculationService;
	}

	_getDayRowDefinition(day) {
		const paidMeals = [
			day.excludeBreakfast ? `Breakfast` : null,
			day.excludeLunch ? `Lunch` : null,
			day.excludeDinner ? 'Dinner' : null
		].filter(el => !!el).join(', ');
		return [
			day.date.format('YYYY-MM-DD (ddd)'),
			{ text: `${day.baseRate.toFixed(2)} EUR`, style: 'rate' },
			paidMeals,
			{ text: `${day.rate.toFixed(2)} EUR${day.fallbackFrom ? '*' : ''}`, style: 'rate' }
		];
	}

	_generateDocDefinition() {
		const days = this.calculationService.dayList;
		const docDef = {
			content: [
				{ text: 'German Meal Allowance', style: 'header' },
				{ text: `Location: ${getCountryNameByCode(this.calculationService.getCountry())}`, style: 'location' },
				{
					table: {
						body: [
							[ 'Date', 'Base Rate', 'Meals paid by company', 'Rate' ],
							...days.map(this._getDayRowDefinition),
							[
								{ text: 'Total', 'colSpan': 3, style: 'total' },
								'',
								'',
								{ text: `${this.calculationService.total.toFixed(2)} EUR`, style: 'total' }
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
					bold: true,
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
		if (days.filter(day => day.fallbackFrom).length > 0) {
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
