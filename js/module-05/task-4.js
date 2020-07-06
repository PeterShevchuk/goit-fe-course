function StringBuilder(string) {
    this.value = string;
    this.getter = function () {
        return this.value;
    },
    this.append = function (item) {
        this.value += item;
    },
    this.prepend = function (item) {
		this.value = item+this.value;
    },
    this.pad = function (item) {
		this.value = item+this.value+item;
    }    
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='