// styles
import "./styles.css";

//templates
import toGenerateCountry from "./templates/postCountry.hbs";
import toGenerateListCountry from "./templates/listCountry.hbs";

//lodash.debounce
import debounce from "lodash.debounce";

//pnotify
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { alert } from '@pnotify/core';

class Country {
  constructor() {
    this.URL = "https://restcountries.eu/rest/v2/name/";
    this.input = document.querySelector("#country input");
    this.listCountry = document.querySelector("#countryList");
    this.country = document.querySelector("#results");
    this.chart = 'qwertyuiopasdfghjklzxcvbnm';
  }
  getData() {
    this.value = this.input.value;
    if (this.check(this.value)) {return}
    fetch(this.URL + this.value)
      .then((response) => response.json())
      .then((data) => {
        this.result(data);
        this.data = data;
      })
      .catch((error) => console.log(error));
  }
  getCoutry(code) {
    this.result([this.data.find((item) => item.alpha3Code === code)]);
  }
  result(data) {
    this.clear();
    if (!data.length) {
      this.clear();
    } else if (data.length > 1 && data.length <=10) {
      this.listCountry.innerHTML = toGenerateListCountry(data);
    } else if ( data.length > 10) {
        this.message('Введіть більше символів!');
    } else {
      this.country.innerHTML = toGenerateCountry(data[0]);
    }
  }
  clear() {
    this.listCountry.innerHTML = "";
    this.country.innerHTML = "";
  }
  init() {
    this.input.addEventListener("input", debounce(() => {this.getData();}, 500));
    this.listCountry.addEventListener("click", (event) => {this.getCoutry(event.target.getAttribute('data-alpha3Code'))});
  }
  check(val) {
    if (val === '') {return true}
    if (val === ' ') {this.message('Пусте поле не може бути, потрібно ввести символи!');return true}
    if (!val.toLowerCase().split("").some(char => this.chart.includes(char))) {this.message('Тільки англійські символи!');return true}
    return false
  }
  message(message, title = 'Увага!', type = 'error') {
    const notice = alert({
        title: title,
        text: message,
        type: type,
        delay: 2500,
        // hide: false,
      });
      notice.on('pnotify:confirm', () => {
        // User confirmed, continue here...
      });
      notice.on('pnotify:cancel', () => {
        // User canceled, continue here...
      });
  }
}

const search = new Country();
search.init();
