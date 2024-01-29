//forEach LOOP in ARRARY
//arr.forEach(callBackFunction)
//CallbackFunction : Here,it is a function to execute for each element in the array 
//A callback is a function passed as an argument to another function
 // we can write function as parameter
// function can be return 
 
let arr = ["pune","mumbai","chennai","Bengluru"];
arr.forEach({val,idx,arr} => {
    console.log(val.toUpperCase(),idx,arr);
});
