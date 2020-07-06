class Storage { 
  constructor(arr) {
    this.items = arr;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.indexDel = this.items.indexOf(item);
    if (this.indexDel > -1) {
        this.items.splice(this.indexDel, 1);
      }
    }
  getItems() {
    return this.items;
  }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);




  const items = storage.getItems();
  console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
  
  storage.addItem('Дроїд');
  console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
  
  storage.removeItem('Пролонгер');
  console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]