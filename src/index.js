const foo = require('./lib');

export const API_ENV = process.env.MY_ENV;

console.log('API_ENV, foo: ', API_ENV, foo());

export const FOO = 'BAR';
export const ANUM = 123;
export const ANY_PRIMITIVE = '11';
export const ARRAY_OF_ANY_PRIMITIVE = [1, 'fff'];
export const ARRAY_OF_ANY_PRIMITIVE_WITH_LENGTH_REQUIREMENT = [1, 2];
export const ARRAY_OF_0 = [1];
export const ARRAY_OF_ENUM = [['macbook', 1], ['thinkpad', 2], ['surface', 3]];
export const SIMPLE_OBJECT = { foo: 'bar', total: 2 };
export const COMPLEX_OBJECT = { foo: 'bar', params: { page: 'home', isFirst: true }, args: [["-v", true]] };
export const ARRAY_OF_OBJECT = [{ name: 'wansong', score: 100 }];
