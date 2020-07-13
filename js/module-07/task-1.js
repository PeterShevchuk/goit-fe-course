let list = document.querySelector('#categories')
list.style.display = 'block';

console.log(`У списку ${list.children.length} категорії.`)

for (const item of list.children) {
    console.log(`Категорія: ${item.querySelector('h2').textContent}`)
    console.log(`Кількість елементів: ${item.querySelector('ul').children.length}`)
}
