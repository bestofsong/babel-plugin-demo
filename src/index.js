const foo = require('./lib');

export const API_ENV = process.env.MY_ENV;

console.log('API_ENV, foo: ', API_ENV, foo());

export const FOO = 'BAR';
export const ANUM = 123;
