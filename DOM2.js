let div = document.querySelector("div");
div.style.backgroundColor = "green"; //changing background color
div.style.backgroundColor = "purple";
div.style.fontSize = "20px"; // Changing the size of text
div.innerText = "HELLO"; //changing text
//div.style.visibility = "hidden";//It hide the whole text

let id = div.getAttribute("id"); //to get the atttribute value
console.log(id);

let named = div.getAttribute("name"); // to set the atttribute value
console.log(named);

let para = document.querySelector("p");
console.dir(para.getAttribute("class", "myclass"));

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);
