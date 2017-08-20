import pdfmake from 'pdfmake/build/pdfmake.js';
import vfsFonts from 'pdfmake/build/vfs_fonts.js';

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
			{ text: `${day.rate.toFixed(2)} EUR`, style: 'rate' }
		];
	}

	_generateDocDefinition() {
		const days = this.calculationService.dayList;
		const deductions = this.calculationService.deductions;
		return {
			content: [
				{ text: 'German Meal Allowance', style: 'header' },
				{ text: `Location: ${this.calculationService.countryName}`, style: 'location' },
				{ text: 'Deduction per company provided meal:' },
				{
					ul: [
						`Breakfast: ${deductions.breakfast.toFixed(2)} EUR`,
						`Lunch: ${deductions.lunch.toFixed(2)} EUR`,
						`Dinner: ${deductions.dinner.toFixed(2)} EUR`
					],
					style: 'list'
				},
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
				}
			},
			defaultStyle: {
				lineHeight: 1.3
			}
		};
	}

	download() {
		pdfmake.createPdf(this._generateDocDefinition()).download('gma.pdf');
	}
}
