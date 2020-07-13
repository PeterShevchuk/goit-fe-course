document.querySelector(".task2").style.display = "block";

let list = document.querySelector("#ingredients");

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

function createLi(text) {
  let li = document.createElement("li");
  li.textContent = text;

  return li;
}

let menuList = ingredients.map((item) => createLi(item));
list.append(...menuList);
