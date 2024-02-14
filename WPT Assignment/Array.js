//let marks = [97, 98, 75, 87, 94, 88];
//marks[2] = "95";
//console.log(marks);
//console.log(marks.length);

/*let company = [
  "capgimani",
  "TCS",
  "Wipro",
  "Microsoft",
  "Google",
  "Bank of America",
];
//console.log(company);
for (let i = 0; i < company.length; i++) {
  console.log(company);
}*/

let arry = [97, 46, 33, 105, 217];
let sum = 0;
for (let val of arry) {
  sum += val;
  console.log(sum);
}
let avg = sum / arry.length;
console.log(`avg marks of a student ${avg}`);
