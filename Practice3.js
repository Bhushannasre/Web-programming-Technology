let a=[87,66,65,55,99,8,23];
let sum=0;
for(let i of a){
    sum+=i;

}
let avg=sum/a.length;
console.log(`average marks of the class=${avg}`);


let items=[88,98,87,115,200];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;

}
console.log(items);

let foodItems=["Mango","Potato","Grapes","Carrots"];

foodItems.push("Beans","cauliflower");//adding fooditem at the end of the array
console.log(foodItems);
let deleteItem=foodItems.pop();//Delete fooditem at the end of the array
console.log("Deleted Items is:",deleteItem);
let stringItem=foodItems.toString();//converting values to strings item
console.log(stringItem);

let marvel=["Ironman","Spiderman","thor","CaptanAmerica"];

let dc=["Aquaman","Superman","Batman","Antman"];

let heroes= marvel.concat(dc);//Joining two strings
console.log(heroes);

let cars=["swift","Envour","Bmw C", "Fortuner"];
let val=cars.unshift("Cyber Truck");//Adding Item at the start of the array
// let mal=cars.shift(); // Deleting Item at the end of the array
console.log(cars);


//Practice Question 

let Companies= ["Bloomberg","Google","Microsoft","Uber","Dominos"];
let remove= Companies.shift();
console.log(Companies);
console.log("Deleted Itema:",remove);
let newItem=Companies.splice(3,1,"Ola");
console.log("new Items", newItem);
console.log("Deleted Item from end:",Companies.pop());