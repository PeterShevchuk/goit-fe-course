class StringBuilder { 
    constructor(string) {
        this.value = string;
    }
    getter() {
        return this.value;
    }
    append(item) {
        this.value += item;
    }
    prepend(item) {
		this.value = item+this.value;
    }
    pad(item) {
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