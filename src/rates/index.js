import rates2017 from './2017';

const rates = {
	2017: rates2017,
};

const fallbackYear = 2017;

export function getRateForCountry(code, year) {
	if (year in rates) {
		return rates[year][code];
	} else {
		return {
			...rates[fallbackYear][code],
			fallbackFrom: fallbackYear
		};
	}
}
