console.log("Here is : ", "Reduce & Filter");

//Using Reduce 1 -5
var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zuessssssss", last: "Odirrrrrrrrrrrrrrn" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 }
];

/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

function avgAge(persons) {
  var reducer = (acc, current) => acc + current.age;
  return persons.reduce(reducer, 0) / persons.length;
}
// console.log(avgAge(persons));
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(persons) {
  var reducer = (acc, current) => {
    if (
      acc.name.first.length + acc.name.last.length >
      current.name.first.length + current.name.last.length
    ) {
      return acc;
    } else {
      return current;
    }
  };

  return persons.reduce(reducer);
}
// console.log(longestName(persons));
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr) {
  var reducer = (acc, current) => {
    if (acc > current) {
      return acc;
    }
    return current;
  };
  return arr.reduce(reducer);
}
// console.log(maxNumber([1, 2, 4, 9, 1]));
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str, char) {
  var counter = 0;
  var arr = str.split("");
  var reducer = (acc, current) => {
    if (current == char) {
      counter++;
    }
  };
  arr.reduce(reducer, 0);
  return counter;
}
// console.log(repeatChar("whello world","w"))
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs(num1, num2) {
  var arr = [num1];
  var reducer = (acc, current) => {
    if (current <= acc) {
      current++;
      arr.push(current);
    }
    arr.push(acc - 1);
    arr.push(acc);
  };
  arr.reduce(reducer, num2);
  return arr;
}
console.log(usAndNumberBeetweenUs(2, 5));
//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
  var newArr = [];
  var reducer = acc => {
    if (acc % 2 == 0) {
      return acc;
    }
  };
  return arr.filter(reducer);
}
// console.log(evenOnly([1, 8, 6, 4]));
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
  var reducer = acc => {
    if (acc % 4 == 0) {
      return acc;
    }
  };
  return arr.filter(reducer);
}
// console.log(multiFour([1, 8, 6, 4]));
/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, str) {
  return arr.filter(a => {
    if (a[0] == str) {
      return a;
    }
  });
}
// console.log(containChar(["hello", "world"], "w"));
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(arr) {
  return arr.filter((a, i) => {
    if (a.length % 2 == 1 && i % 2 == 0) {
      return a;
    }
  });
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// console.log(evenIndexOddLength(strings));
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(arr, age) {
  return arr.filter(a => {
    if (a.age > age) {
      return a;
    }
  });
}
// console.log(olderThan(persons, 56));
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(arr, num) {
  return arr.filter(a => {
    if (a.length < num) {
      return a;
    }
  });
}
// console.log(shorterThan(strings, 5));
// if you finish the exercises review the material of the week and help your classmate
