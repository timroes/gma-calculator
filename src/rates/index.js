import rates2017 from './2017';
import rates2018 from './2018';
import rates2019 from './2019';

const rates = {
	2017: rates2017,
	2018: rates2018,
	2019: rates2019,
};

const fallbackYear = 2019;

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
