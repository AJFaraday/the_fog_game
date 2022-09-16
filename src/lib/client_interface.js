import { PlayerInterface } from "../interfaces/player_interface";

export class ClientInterface {
  #player;
  #game;
  #grid;

  constructor(player) {
    this.#player = player;
    this.#game = this.#player.game;
    this.#grid = this.#game.grid;

    this.player = new PlayerInterface(this.#player);
  }

  // player data:
  // score
  // cars
  //   {x: , y:, active:, sensor_range:}

  // grid data:
  // height
  // width
  // expored_spaces
  // [{x:, y: }, ...]
  // foggy_spaces

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
