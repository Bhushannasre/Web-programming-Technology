const redbtn = document.getElementById("redbtn");
const yellowbtn = document.getElementById("yellowbtn");
const greenbtn = document.getElementById("greenbtn");

redbtn.addEventListener("click", function changeBackgroundColorRed() {
  redbtn.style.backgroundColor = "red";
  yellowbtn.style.backgroundColor = "red";
  greenbtn.style.backgroundColor = "red";
});

yellowbtn.addEventListener("click", function changeBackgroundColorYellow() {
  redbtn.style.backgroundColor = "yellow";
  yellowbtn.style.backgroundColor = "yellow";
  greenbtn.style.backgroundColor = "yellow";
});

greenbtn.addEventListener("click", function changeBackgroundColorGreen() {
  redbtn.style.backgroundColor = "green";
  yellowbtn.style.backgroundColor = "green";
  greenbtn.style.backgroundColor = "green";
});
