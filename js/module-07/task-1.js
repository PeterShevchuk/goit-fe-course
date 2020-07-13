document.querySelector(".task1").style.display = "block";

let list = document.querySelector("#categories");

console.log(`У списку ${list.children.length} категорії.`);

for (const item of list.children) {
  console.log(`Категорія: ${item.querySelector("h2").textContent}`);
  console.log(
    `Кількість елементів: ${item.querySelector("ul").children.length}`
  );
}
