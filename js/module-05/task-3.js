function Storage(arr) {
    this.items = arr;
    this.addItem = function (item) {
        this.items.push(item);
    },
    this.removeItem = function (item) {
        this.indexDel = this.items.indexOf(item);
        if (this.indexDel > -1) {
            this.items.splice(this.indexDel, 1);
          }
    },
    this.getItems = function () {
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