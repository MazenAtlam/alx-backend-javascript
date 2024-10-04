import Car from './100-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }

  static cloneCar() {
    return new this[Symbol.species]();
  }
}
