import countries from './data';

export interface Country {
	name: string;
	code: string;
	flag?: string;
}

export function getAllCountries(): ReadonlyArray<Country> {
	return countries;
}

export function getCountryNameByCode(code: string) {
	return countries.filter(country => country.code === code)[0].name;
}
