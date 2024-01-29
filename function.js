console.log("The game");
function happy() {
  console.log("we are open");
}

happy();
function myFunction() {
  //defining function
  console.log("I love js");
}

myFunction(); //calling function
function message(msg, n) {
  //parameterized -> input
  console.log(msg * n);
}
message("I love my India", 100); //argument
//Not a number

// Function ->2 numbers,

function sum(x, y) {
  //local variables -> scope
  sum = x + y;
  return s;
}

let val = sum(4, 6);
console.log(val);
//paramaters are local variable of function they are alive till block scope

function multi(a, b) {
  return a * b;
}

let arrowmulti = (a, b) => {
  //arrow function
  return a * b;
};

arrowmulti = 25;

//without input
const printHello = () => {
  console.log("hello");
};

//Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string.

function countVowels(str) {
  //"Bhushan nasre",count = 1 It will check each charcher and incereases count number by 1
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// "abc".toupperCase is a method
