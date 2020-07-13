document.querySelector(".task7").style.display = "block";

const input = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

input.addEventListener("input", (val) => {
  inputText.style.fontSize = val.target.value + "px";
});
