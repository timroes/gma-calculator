import countries from './data';

export function getAllCountries() {
	return countries;
}

export function getCountryNameByCode(code) {
	return countries.filter(country => country.code === code)[0].name;
}
