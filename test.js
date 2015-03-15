// test.js

var landen = require('./landen');

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
