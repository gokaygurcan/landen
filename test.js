// test.js

var landen = require('./landen');

console.log( '----------------------------' );
console.log( '-NAME-----------------------' );
console.log( '----------------------------' );
console.log( landen('TR').name() );
console.log( '----------------------------' );
console.log( landen('TR').name('conventional') );
console.log( '----------------------------' );
console.log( landen('TR').name('conventional', 'long') );
console.log( '----------------------------' );
console.log( landen('TR').name('conventional', 'short') );
console.log( '----------------------------' );
console.log( landen('TR').name('local') );
console.log( '----------------------------' );
console.log( landen('TR').name('local', 'long') );
console.log( '----------------------------' );
console.log( landen('TR').name('local', 'short') );
console.log( '----------------------------' );
console.log( landen('TR').name('former') );
console.log( '----------------------------' );
console.log( landen('TR').name('abbreviation') );
console.log( '----------------------------' );
console.log( '-CODE-----------------------' );
console.log( '----------------------------' );
console.log( landen('TR').code('alpha2') );
console.log( '----------------------------' );
console.log( landen('TR').code('alpha3') );
console.log( '----------------------------' );
console.log( landen('TR').code('numeric') );
console.log( '----------------------------' );
console.log( landen('TR').code('fips') );
console.log( '----------------------------' );
console.log( landen('TR').code('ioc') );
console.log( '----------------------------' );

