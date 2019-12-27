import { rates } from './rates';

export function getRateForCountry(country: string, year: number): { full: number; reduced: number; fallbackFrom?: number } {
  const rateForYear = rates.countries[country].find(rate => rate.since === year);

  // We have a rate for that specific year so use it
  if (rateForYear) {
    return rateForYear;
  }

  const oldestRate = rates.countries[country].find(rate => rate.since === rates.fromYear) ?? { full: 0, reduced: 0, since: 0 };

  // The requested year is before the rates records, so use the oldest record instead
  if (year < rates.fromYear) {
    return {
      ...oldestRate,
      fallbackFrom: rates.fromYear,
    }
  }

  // Otherwise (the year is > the oldest year and we don't have a rate for that specific year)
  // we're trying to find the highest year, that is still <= the requested year.
  const rate = rates.countries[country].reduce((previous, currentRate) => {
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
