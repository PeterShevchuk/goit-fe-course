document.querySelector(".task6").style.display = "block";

const input = document.querySelector("#validation-input");

const currentLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", (val) => {
  if (val.target.value.length === currentLength) {
    input.classList.contains("invalid")
      ? input.classList.remove("invalid")
      : null;
    input.classList.add("valid");
  } else {
    input.classList.contains("valid") ? input.classList.remove("valid") : null;
    input.classList.add("invalid");
  }
});
