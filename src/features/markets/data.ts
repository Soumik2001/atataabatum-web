export type Instrument = {
  symbol: string;
  last: number;
  change: number;
  volume: string;
  sector: 'Banking' | 'Energy' | 'Telecom';
  mktCap: string;
  pe: number;
  yield: number;
  high52w: number;
  bid: number;
  ask: number;
};

export const instruments: Instrument[] = [
  { symbol: 'GTCO', last: 128.4, change: 1.8, volume: '412K', sector: 'Banking', mktCap: '1.2B', pe: 14.6, yield: 3.1, high52w: 141.2, bid: 128.2, ask: 128.6 },
  { symbol: 'MTNN', last: 96.2, change: -0.7, volume: '318K', sector: 'Telecom', mktCap: '2.1B', pe: 18.2, yield: 2.4, high52w: 105.0, bid: 96.0, ask: 96.4 },
  { symbol: 'DANGCEM', last: 212.75, change: 0.4, volume: '264K', sector: 'Energy', mktCap: '3.4B', pe: 12.1, yield: 4.0, high52w: 230.0, bid: 212.5, ask: 213.0 },
  { symbol: 'ZENITH', last: 41.05, change: 2.6, volume: '198K', sector: 'Banking', mktCap: '0.8B', pe: 9.8, yield: 5.2, high52w: 45.0, bid: 40.9, ask: 41.2 },
  { symbol: 'SEPLAT', last: 75.6, change: -1.4, volume: '152K', sector: 'Energy', mktCap: '1.1B', pe: 11.4, yield: 3.8, high52w: 84.0, bid: 75.4, ask: 75.8 },
  { symbol: 'SNTS', last: 18.9, change: 0.9, volume: '121K', sector: 'Telecom', mktCap: '0.5B', pe: 15.0, yield: 1.9, high52w: 21.0, bid: 18.8, ask: 19.0 },
  { symbol: 'GCB', last: 64.35, change: -0.3, volume: '96K', sector: 'Banking', mktCap: '0.9B', pe: 13.2, yield: 2.7, high52w: 70.0, bid: 64.2, ask: 64.5 },
];