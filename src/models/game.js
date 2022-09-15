import {Grid} from './grid.js';
import {Car} from './car.js';
import { Player } from './player.js';
import { TurnManager } from '../lib/turn_manager.js';

export class Game {
  constructor(options={}) {
    this.grid = new Grid(options.height, options.width);
    this.player = new Player(this);
    this.cars = [];
    this.new_car(options.start_x, options.start_y, 0);
    this.active_car = this.cars[0];
    this.renderer = new options.renderer(this);
    this.turn_manager = new TurnManager(this)
  }

  new_car(x, y, direction) {
    const car = new Car(this, x, y, direction);
    this.cars.push(car);
    this.grid.get(x,y).cars.push(car);
  }

  draw() {
    this.renderer.draw();
  }

  next_car() {
    this.turn_manager.next_car(); 
  }

  previous_car() {
    this.turn_manager.previous_car();
  }

  set_car(index) {
    this.turn_manager.set_car(index);
  }
}
