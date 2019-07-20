/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/
function longerThan(arr, num) {
  return arr.filter(a => {
    if (a.length > num) {
      return a;
    }
  });
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// console.log(longerThan(strings, 4));
/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/
function onlyOneWord(arr) {
  return arr.filter(a => {
    if (!a.includes(" ")) {
      return a;
    }
  });
}
var strings = ["return", "phrases", "with one word"];
// console.log(onlyOneWord(strings));
/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/
function positiveRowsOnly(arr) {
  return arr.filter((a, i) => {
    return a.reduce((acc, current) => {
      if (current > 0) {
        return a;
      }
    });
  });
}

var numbers = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];

console.log(positiveRowsOnly(numbers));
/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/

//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/
function objectify(arr) {
  var obj = {};
  arr.reduce((acc, current) => {
    obj[current[0]] = current.reduce((acc2, current2) => {
      return current2;
    });
  }, 0);
  return obj;
}

var array = [
  ["Thundercats", "80s"],
  ["The Powerpuff Girls", "90s"],
  ["Sealab 2021", "00s"]
];
// console.log(objectify(array));
/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/
function luckyNumbers(arr) {
  var str = "";
  var obj = {};
  arr.reduce((acc, current) => {
    str += current + ", ";
    obj["Your lucky numbers are"] = str + "and " + current;
  }, 0);
  return obj;
}
var array = [30, 48, 11, 5, 32];
// console.log(luckyNumbers(array));
// if you finish the exercises review the material of the week and help your classmate
