import { Interfaces } from '../interfaces.js';

export class ClientInterface {
  #player;
  #game;
  #grid;

  constructor(player) {
    this.player = new Interfaces.PlayerInterface(player);
    this.grid = new Interfaces.GridInterface(player.game.grid);
  }

  // player data:
  // player.score()
  // player.cars()
  //   {x: , y:, active:, sensor_range:}

  // grid data:
  // height
  // width
  // visible_spaces
  // [{x:, y: }, ...]
  // foggy_spaces
  // spaces

  // car data:
  // coord
  // distance_to_n
  // distance_to_e
  // distance_to_s
  // distance_to_w
  // sensor_range

  // actions:
  // go
  // turn_right
  // turn_left
  // enhance_sensors
  // new_car
}
