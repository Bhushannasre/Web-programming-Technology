// let btn=document.querySelector(".btn1");
// btn=addEventListener('click',()=>{
// console.log("Action completed!");
// });
    

let btn=document.querySelector("mode");
let body=document.querySelector("body");
let currMode= "light";

btn=addEventListener('click',()=>{
    if(currMode === "light"){
        currMode="dark";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    else{
    currMode="light";
        body.classList.add("dark");
        body.classList.remove("light");
    }
console.log(currMode);
});
