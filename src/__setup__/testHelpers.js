/* eslint-disable import/no-extraneous-dependencies,no-console */
import sinon from 'sinon';

const consoleError = console.error;
console.error = (error, ...args) => {
  if (/(Invalid prop|Failed prop type)/.test(error)) {
    throw new Error(error);
  }
  consoleError(error, ...args, new Error().stack);
};

const fakeDate = () => {
  const now = new Date('January 1, 2015 01:01:01:001 GMT+00:00');
  return sinon.useFakeTimers(now);
};

export default {
  fakeDate,
};
