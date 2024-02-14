//for loop print 100 even numbers
//for (let num = 0; num <= 100; num++) {
// if (num % 2 == 0) {
//  console.log("num=", num);
//}
//}

let realnumber = 23;
let usernumber = prompt("Guess the number:-");
while (usernumber != realnumber) {
  usernumber = prompt("Y0u entered wrong number");
}
console.log("CONGRULATION!you Entered Right number");
