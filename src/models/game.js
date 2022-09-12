import {Grid} from './grid.js';
import {Car} from './car.js';

export class Game {
  constructor(options={}) {
    this.grid = new Grid(options.height, options.width);
    this.cars = [];
    this.new_car(options.start_x, options.start_y);
    this.renderer = new options.renderer(this.grid);
  }

  new_car(x, y) {
    const car = new Car(this, x, y);
    this.cars.push(car);
    this.grid.get(x,y).cars.push(car);
  }
}
