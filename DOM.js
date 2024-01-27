//Changing Text at a Specific place
//css remain same
document.body.childNodes[1].innerText = "Bhushan Ki College";
// Selecting with id
let button = document.getElementById("myId"); //h1
console.dir(button);

//Every Statement we can make it as a class in html file
//In css file make it .heading to make it a class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

//Selecting with tag

let pargh = document.getElementsByTagName("p");
console.log(pargh);

//Query Selector Tag to get particular paragraph
//Query Selector return NodeList
// return first element
let element = document.querySelector("#myId");
console.dir(element);

//return a NodeList
let elements = document.querySelectorAll("p");
console.dir(elements);

//
let div = document.querySelector("div");
console.dir(div);

//Pratice Question
//Make h2 tag and add text at end of text
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "12 LACK PACKAGE"; // Here we are concatninate to two statement
