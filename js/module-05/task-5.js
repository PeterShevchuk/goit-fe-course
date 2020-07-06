class Car {
    
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */

    static getSpecs(cars) {
        return console.log(`maxSpeed: ${cars._maxSpeed}, speed: ${cars._speed}, isOn: ${cars._isOn}, distance: ${cars._distance}, price: ${cars._price}`);
      }
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor(arr) {
        this._speed = 0;
        this._price = arr.price;
        this._maxSpeed = arr.maxSpeed;
        this._isOn = false;
        this._distance = 0;

    }
  
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
  

    get price() {return this._price;}
    
    set price(value) {value>=0? this._price = value : console.log('Ціна нижча 0')}

    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this._isOn = true;
    }
  
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }

  
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {value <= this._maxSpeed? this._speed += value : console.log(`Значення більше, ніж значення властивості maxSpeed: ${this._maxSpeed}`)}
  
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {this._speed-value >= 0? this._speed -= value : console.log(`Результуюча швидкість менше нуля`)}
  
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        this._isOn? this._distance = hours*this._speed : console.log(`Машина не заведена`)
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000,});
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000