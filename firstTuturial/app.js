'use strict';

var str= 'Is this This?';

//var regex = new RegExp("it");

// if i try regex = /is/ regurn some result 
var regex = /is/g;

//ignoce case flag is 'i'

// return only true or false about regex
//console.log(regex.test(str));

//return index and input string for macher

// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));

//return array of all match
//console.log(str.match(regex));


console.log(str.replace(regex, str => 'XXX'));