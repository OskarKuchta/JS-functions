// Simple time clock 
const simpleClock = () => {
    let data = new Date();
    document.getElementById("clock").innerHTML = "<b>" + data.toLocaleTimeString() + "</b>";
  }
  setInterval(simpleClock, 1000);

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
const screen = document.querySelector(".screen"),
      name = document.querySelector(".name");
screen.onmouseenter = event => {  
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return name.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]})
      .join("");
    if(iteration >= name.dataset.value.length){ 
      clearInterval(interval);
  }
  iteration += 1 / 3;
  }, 30);
}