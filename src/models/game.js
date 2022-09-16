import {Grid} from './grid.js';
import { Player } from './player.js';

export class Game {
  constructor(options={}) {
    this.grid = new Grid(options.height, options.width);
    this.player = new Player(this);
    this.player.new_car(options.start_x, options.start_y, 0);
    this.renderer = new options.renderer(this);
  }

  draw() {
    this.renderer.draw();
  }
}
