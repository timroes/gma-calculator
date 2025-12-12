import { rates } from './rates';

export function getRateForCountry(country: string, year: number): { full: number; reduced: number; fallbackFrom?: number; replacedByCountry?: string } {
  const info = rates.countries[country];
  
  // Check for countries that have been replaced by another for the given year
  if (info.replaced && year >= info.replaced.since) {
    return {
      full: 0,
      reduced: 0,
      replacedByCountry: info.replaced.by,
    };
  }

  const rateForYear = info.rates.find(rate => rate.since === year);

  // We have a rate for that specific year so use it
  if (rateForYear) {
    return rateForYear;
  }

  const oldestRate = info.rates.find(rate => rate.since === rates.fromYear) ?? { full: 0, reduced: 0, since: 0 };

  // The requested year is before the rates records, so use the oldest record instead
  if (year < rates.fromYear) {
    return {
      ...oldestRate,
      fallbackFrom: rates.fromYear,
    }
  }

  // Otherwise (the year is > the oldest year and we don't have a rate for that specific year)
  // we're trying to find the highest year, that is still <= the requested year.
  const rate = info.rates.reduce((previous, currentRate) => {
    if (currentRate.since > previous.since && currentRate.since <= year) {
      return currentRate;
    }
    return previous;
  }, oldestRate);

  return {
    ...rate,
    // If the requestyed year is newer then our newest year we still use the latest found rate, but mark it as
    // fallback for the newest, so the user will see a warning, that they are request not yet maintained rates.
    fallbackFrom: year > rates.toYear ? rates.toYear : undefined,
  };
}

export { rates };
