import imgArray from "./gallery-items.js";

const gallery = {
  modalImg: document.querySelector("img.lightbox__image"),
  listImg: document.querySelector("ul.js-gallery"),
  modalWindowClose: document.querySelector(".js-lightbox"),
  modalWindow: document.querySelector(".lightbox"),
  infoPrevNext: '',

  addImageGallery(prev, orig, desc) {
    let li = document.createElement("li");
    let link = document.createElement("a");
    let img = document.createElement("img");

    li.classList.add("gallery__item");
    link.classList.add("gallery__link");
    img.classList.add("gallery__image");

    img.setAttribute("src", prev);
    img.setAttribute("data-source", orig);
    img.setAttribute("alt", desc);

    link.appendChild(img);
    li.appendChild(link);

    return li;
  },
  getImagesList(array) {
    return array.map((obj) =>
      this.addImageGallery(obj.preview, obj.original, obj.description)
    );
  },
  setImageInGallery(list) {
    list.append(...this.getImagesList(imgArray));
  },
  modalShow(item) {
    this.modalImg.setAttribute("src", item.getAttribute("data-source"));
    this.modalWindow.classList.add("is-open");
    this.infoPrevNext = item.parentNode.parentNode;
  },
  modalHide() {
    this.modalWindow.classList.contains("is-open")? this.modalWindow.classList.remove("is-open") : null
    this.clearWindow();
  },
  clearWindow() {
    this.modalImg.setAttribute("src", "");
  },
  keyDown(event) {
      let code = event.code;
      code === 'Escape'? this.modalHide() : null
      code === 'ArrowLeft'? this.modalPrevNext('prev') : null
      code === 'ArrowRight'? this.modalPrevNext('next') : null
  },
  modalPrevNext(item) {
    this.modalHide();
    if (item ==='prev') {this.infoPrevNext.previousSibling? this.modalShow(this.infoPrevNext.previousSibling.querySelector("a").querySelector("img")) : this.modalHide()}
    if (item ==='next') {this.infoPrevNext.nextSibling? this.modalShow(this.infoPrevNext.nextSibling.querySelector("a").querySelector("img")) : this.modalHide()}
  },
};

gallery.setImageInGallery(gallery.listImg);

gallery.listImg.addEventListener("click", (e) => {
  gallery.modalShow(e.target);
});

gallery.modalWindowClose.addEventListener("click", () => {
  gallery.modalHide();
});

document.addEventListener('keydown', event => gallery.keyDown(event));
