export const formatNumber = (number: number | string) => new Intl.NumberFormat().format(+number);

export const formatCurrency = (amount: number | string, locale = 'en-US', currency = 'usd'): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(+amount);
