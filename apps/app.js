// Simple time clock 
const simpleClock = () => {
    let data = new Date();
    document.getElementById("clock").innerHTML = "<b>" + data.toLocaleTimeString() + "</b>";
  }
  setInterval(simpleClock, 1000);