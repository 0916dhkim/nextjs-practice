export const CURRENCIES = ["USD", "GBP", "EUR"] as const;
export type Currency = typeof CURRENCIES[number];

interface BpiElement {
  description: string;
  rate: number;
  code: string;
}

export type Bpi = {
  [key in Currency]: BpiElement;
}
