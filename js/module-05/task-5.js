class Car {
    
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */

    static getSpecs(cars) {
        console.log(`maxSpeed: ${cars.maxSpeed}, speed: ${cars.speed}, isOn: ${cars.isOn}, distance: ${cars.distance}, price: ${cars.price}`);
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
        this.speed = arr.speed? arr.speed: 0;
        this.price = arr.price;
        this.maxSpeed = arr.maxSpeed;
        this.isOn = arr.isOn? arr.isOn : false;
        this.distance = arr.distance? arr.distance : 0;

    }
  
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
  
    getter() { console.log(this.price) }
    
    setter(value) { value>=0? this.price = value : console.log('Ціна нижча 0')}

    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn = true;
    }
  
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

  
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {value <= this.maxSpeed? this.speed += value : console.log(`Значення більше, ніж значення властивості maxSpeed: ${this.maxSpeed}`)}
  
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {this.speed-value >= 0? this.speed -= value : console.log(`Результуюча швидкість менше нуля`)}
  
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        this.isOn? this.distance = hours*this.speed : console.log(`Машина не заведена`)
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