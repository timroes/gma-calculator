export interface Rate {
  since: number;
  full: number;
  reduced: number;
}

interface CountryInformation {
  names: {
    en: string;
  };
  replaced?:{
    since: number;
    by: string;
  };
  rates: Rate[];
  flag?: string;
}

export interface Rates {
  fromYear: number;
  toYear: number;
  countries: { [countryCode: string]: CountryInformation };
}