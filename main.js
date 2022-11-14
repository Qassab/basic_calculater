const display = document.getElementById("display");
const btns = Array.from(document.querySelectorAll(".btn"));

let resulte;
btns.map((btn) => {
  btn.addEventListener("click", (e) => {
    const num = parseFloat(display.value);
    const btnClicked = e.target.innerText;
    
    if (btnClicked === "c") {
      display.value = 0;
    } else if (btnClicked === "+") {
      resulte = num + num;
    } else if (btnClicked === "x") {
      resulte = num * num;
    } else if (btnClicked === "=") {
      display.value = resulte;
    }
    if (isNaN(num)) {
      display.value = "Erorr";
    }
  });
});
