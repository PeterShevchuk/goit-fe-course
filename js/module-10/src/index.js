import './styles.css';

import postsdb from './db/posts.json';
const postsListRef = document.querySelector('.posts'); 
// Створюємо галерею постів по одному елементу
// import toGeneratePost from './templates/newPost.hbs';
// const newPost = toGeneratePost(postsdb);
// postsListRef.insertAdjacentHTML('beforeend', newPost);
// створюємо галерею зі всіма постами одноразово
import toGenerateAllPosts from './templates/allPosts.hbs';
function toCreatePostsList(arr) {
    const newPost = arr.map(post => toGenerateAllPosts(post)).join('');
    postsListRef.insertAdjacentHTML('beforeend', newPost)
};
toCreatePostsList(postsdb);



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeElement = document.querySelector('body'); 
const btnTheme = document.querySelector('input.js-switch-input');
const localKey = localStorage.getItem('dark');

themeElement.classList.add(Theme.LIGHT);

console.log(localKey)

if (localKey) {
    themeElement.classList.replace(Theme.LIGHT, Theme.DARK);
    btnTheme.checked = true;
}

btnTheme.addEventListener('click' , event => {
    if (!event.target.checked) {
        localStorage.removeItem('dark');
        themeElement.classList.replace(Theme.DARK, Theme.LIGHT);
     } else {
         localStorage.setItem('dark', JSON.stringify(Theme.DARK));
         themeElement.classList.replace(Theme.LIGHT, Theme.DARK);
    }
})
