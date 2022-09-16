import {Car} from './car.js';
import { CarManager } from '../lib/car_manager.js';
import { ClientInterface } from '../lib/client_interface.js';
export class Player {

  constructor(game) {
    this.game = game;
    this.score = 0;
    this.cars = [];
    this.car_manager = new CarManager(this)
    this.client_interface = new ClientInterface(this);
  }

  new_car(x, y, direction) {
    const car = new Car(this, x, y, this.cars.length,  direction);
    this.cars.push(car);
    //this.active_car = car;
    this.game.grid.get(x,y).cars.push(car);
  }

  next_car() {
    this.car_manager.next_car(); 
  }

  previous_car() {
    this.car_manager.previous_car();
  }

  set_car(index) {
    this.car_manager.set_car(index);
  }

}
