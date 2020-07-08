class StringBuilder { 
    constructor(string) {
        this._value = string;
    }
    getter() {
        return this._value;
    }
    append(item) {
        this._value += item;
    }
    prepend(item) {
		this._value = item+this._value;
    }
    pad(item) {
		this._value = item+this._value+item;
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='