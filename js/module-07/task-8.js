document.querySelector(".task8").style.display = "block";
let list = document.querySelector("#boxes");
let btnAdd = document.querySelector("#controls [data-action='render']");
let btnClear = document.querySelector("#controls [data-action='destroy']");
let inputCount = document.querySelector("#controls [type='number']");
let div = "";
let divWidthHeigth = 30;
let maxColor = 256;

const getBgColor = () => {
  let red = Math.floor(Math.random() * Math.floor(maxColor));
  let green = Math.floor(Math.random() * Math.floor(maxColor));
  let blue = Math.floor(Math.random() * Math.floor(maxColor));

  return `rgb(${red}, ${green}, ${blue})`;
};

btnAdd.addEventListener("click", () => {
  let amount = inputCount.value;

  for (let i = 0; i < amount; i++) {
    div = document.createElement("div");
    div.style.width = divWidthHeigth + "px";
    div.style.height = divWidthHeigth + "px";
    // div.textContent = `${div.style.width} x ${divWidthHeigth}`;
    div.style.backgroundColor = getBgColor();
    divWidthHeigth += 10;
    list.appendChild(div);
  }
});

btnClear.addEventListener("click", () => {
  list.innerHTML = "";
  divWidthHeigth = 30;
});

// const createBoxes = () => {
//   let amount = document.querySelector("#controls [type='number']").value;
//   for (let i = 0; i < amount; i++) {
//     div = document.createElement("div");
//     div.textContent = `Div number ${i + 1}`;
//     list.appendChild(div);
//   }
// };

// createBoxes(5);

// console.log(input.value);
