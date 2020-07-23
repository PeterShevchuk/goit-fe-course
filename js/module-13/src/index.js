// styles
import "./styles.css";
import "./modalstyles.css";

//templates
import toGenerateGallery from "./templates/postGallery.hbs";
import toGenerateListGallery from "./templates/listGallery.hbs";

//lodash.debounce
import debounce from "lodash.debounce";

//pnotify
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import { alert } from "@pnotify/core";

//modal window
const basicLightbox = require('basiclightbox');

const myKey = "17613343-1ae46d7f2f6b0249714d12d11";

class Search {
  constructor() {
    // search
    this.input = document.querySelector("#search-form input");

    //gallery
    this.galleryShow = document.querySelector('.photo-card');
    this.listGallery = document.querySelector("#galleryList");
    this.gallery = document.querySelector(".gallery");
    this.loadMoreBtn = document.querySelector('.loadMore');

    //options
    this.url = `https://pixabay.com/api/?key=${myKey}&image_type=photo&pretty=true&per_page=12`;
    this.page = 1;

    //others
    this.data = [{}];
    this.chart = /[0-9\s\+\-\а-я\і\ї\є]|\./;
    this.messageText = ['Використано заборонені символи! Тільки англійські символи!', 'Більше немає картинок', 'За вашим запитом не було нічого не знайдено', ]
  }
  getData(e) {
    this.value = this.input.value
    if (this.check(this.value)) {return;}
    if (e) {this.page = e} else {this.clearGallery()}
    this.options = "&q=" + this.value + '&page=' + this.page;
    fetch(this.url + this.options)
      .then((response) => response.json())
      .then((data) => this.result(data.hits))
      .catch((error) => this.message(error));
  }
  check(value){
    if (this.chart.test(value)) {this.message(0);this.clearGallery(); return true} else if (value === '') { return true}
    return false;
  }
  result(data) {
    if (String(data)==='' && this.page>1) {this.message(1);this.page = 1;return;} else if (String(data)==='') { this.message(2);return;}
    this.data = this.data.concat(data);
    this.listGallery.insertAdjacentHTML('beforeend', toGenerateListGallery(data));
    if (data.length>2) {this.loadMoreBtn.style.display = "block";}
  }
  loadMore(){
    this.page = this.page+1;
    this.getData(this.page)
  }
  modalShow(e){
    this.objImg = this.data.find((item) => item.id === Number(e));
    basicLightbox.create(`<img class="lightbox__image" src="${this.objImg.largeImageURL}" alt="${this.objImg.tags}" />`, {onClose: () => this.scroll('hide')}).show()
    this.scroll('show')
  }
  scroll(value){
    value === 'hide'? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden' ;
  }
  clearWindow() {
    this.modalImg.setAttribute("src", "");
    this.modalImg.setAttribute("alt", "");
  }
  clearGallery() {
    this.listGallery.innerHTML = "";
    this.loadMoreBtn.style.display = "none";
    this.data = [{}];
  }
  message(item, title = "Увага!", type = "error") {
    const notice = alert({
      title: title,
      text: this.messageText[item],
      type: type,
      delay: 2500,
      // hide: false,
    });
    notice.on("pnotify:confirm");
    notice.on("pnotify:cancel");
  }
  init() {
    this.input.addEventListener("input",  debounce(() => {this.getData();}, 500),);
    this.loadMoreBtn.addEventListener("click", () => {
      this.loadMore();
    });
    document.addEventListener("click", function(e) {
      if (e.target.parentNode.classList.value === 'photo-card') {search.modalShow(e.target.parentNode.getAttribute("data-id"));}
    });
  }
}

const search = new Search();
search.init();


// var elem = document.querySelector('body');
// var infScroll = new InfiniteScroll( elem, {
//   // options
//   path: '.pagination__next',
//   append: '.post',
//   history: false,
// });