import rates2017 from './2017';
import rates2018 from './2018';

const rates = {
	2017: rates2017,
	2018: rates2018,
};

const fallbackYear = 2018;

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
