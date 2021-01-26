import { atom } from 'recoil';

export const coverageState = atom({
  key: 'coverage',
  default: '',
});

export const usState = atom({
  key: 'state',
  default: '',
});

export const carrierState = atom({
  key: 'carriers',
  default: [],
});
