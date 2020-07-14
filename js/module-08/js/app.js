import imgArray from "./gallery-items.js";

const gallery = {
  // Змінні
  modalImg: document.querySelector("img.lightbox__image"),
  listImg: document.querySelector("ul.js-gallery"),
  modalWindowClose: document.querySelector(".js-lightbox"),
  modalWindow: document.querySelector(".lightbox"),
  infoPrevNext: {}, // info for button prev or next
  button: {prev: 'ArrowLeft', next: 'ArrowRight', esc: 'Escape'},

  // Формування li
  addImageGallery(prev, orig, desc) {
    let li = document.createElement("li");
    let link = document.createElement("a");
    let img = document.createElement("img");

    li.classList.add("gallery__item");
    link.classList.add("gallery__link");
    img.classList.add("gallery__image");

    // link.setAttribute("href", orig);
    img.setAttribute("src", prev);
    img.setAttribute("data-source", orig);
    img.setAttribute("alt", desc);

    link.appendChild(img);
    li.appendChild(link);

    return li;
  },

  // Отримання масиву li
  getImagesList(array) {
    return array.map((obj) =>
      this.addImageGallery(obj.preview, obj.original, obj.description)
    );
  },

  // Додавання масиву li в ul
  setImageInGallery(array, list) {
    list.append(...this.getImagesList(array));
  },

  // Отримання посилання на картинку та запис в модальне вікно, відкриття модального вікна
  modalShow(item) {
    this.clearWindow();
    this.modalSave(item); 
    this.modalImg.setAttribute("src", item.getAttribute("data-source"));
    this.modalWindow.classList.add("is-open");
  },

  // Закриття модального вікна
  modalHide() {
    this.modalWindow.classList.contains("is-open")? this.modalWindow.classList.remove("is-open") : null
    this.clearWindow();
  },

  // Очистка модального вікна
  clearWindow() {
    this.modalImg.setAttribute("src", "");
    this.modalImg.setAttribute("alt", "");
    this.infoPrevNext[this.button.prev] = null;
    this.infoPrevNext[this.button.next] = null;
  },

  // Навігація по кнопкам (вліво, вправо та esc)
  keyDown(event) {
      let code = event.code;
      code === this.button.esc? this.modalHide() :  null
      code === this.button.prev || code === this.button.next? this.modalPrevNext(code) : null
  },

  // Навігація наступне зображення та попереднє
  modalPrevNext(item) {
    item === this.button.prev && this.infoPrevNext[item]  || item === this.button.next  && this.infoPrevNext[item]? this.modalShow(this.infoPrevNext[item]) : null
  },

  // Збереження посилання на попереднє та наступне зображення для навігації між ними
  modalSave(item) {
    item = item.parentNode.parentNode;
    this.infoPrevNext[this.button.prev] = item.previousSibling? item.previousSibling.querySelector("a").querySelector("img") : null;
    this.infoPrevNext[this.button.next] = item.nextSibling? item.nextSibling.querySelector("a").querySelector("img") : null;
  },
};

// Запуск формування зображень
gallery.setImageInGallery(imgArray, gallery.listImg);

// При кліку на зображення, воно відкривається в модільному вікні
gallery.listImg.addEventListener("click", (e) => {
  gallery.modalShow(e.target);
});

// Клік в будь якому місці щоб закрити модільне вікно
gallery.modalWindowClose.addEventListener("click", () => {
  gallery.modalHide();
});

// Отримання клавіші на яку натиснув користувач
document.addEventListener('keydown', event => gallery.keyDown(event));
