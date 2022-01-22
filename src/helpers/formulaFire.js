import { numOr0 } from './helpers';

export const calcFire = (rate, worth, goal, save) => {
  worth = numOr0(worth);
  save = numOr0(save);
  rate = rate / 12;

  const payments =
    Math.log((save / rate + goal) / (save / rate + worth)) / Math.log(1 + rate);

  return Math.round(numOr0(payments / 12));
};
