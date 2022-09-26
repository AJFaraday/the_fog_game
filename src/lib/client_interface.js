import { PlayerInterface } from '../interfaces/player_interface.js';
import { GridInterface } from '../interfaces/grid_interface.js';
import { GameInterface } from '../interfaces/game_interface.js';
export class ClientInterface {
  constructor(player) {
    this.player = new PlayerInterface(player, player.game.grid);
    this.grid = new GridInterface(player.game.grid);
    this.game = new GameInterface(player.game);
  }

  // GameInterface
  // turn

  // PlayerInterface:
  // score
  // cars

  // GridInterface:
  // height
  // width
  // visible_spaces()
  // foggy_spaces()
  // spaces()
  // rows()
  // space_at(x, y)

  // types:
  // CarInterface
    // x
    // y
    // sensor_range
    // direction
    // distance_to_n()
    // distance_to_e()
    // distance_to_s()
    // distance_to_w()
    // take_action(action)
    //
    // closest_fog?
  // Space type
    // x
    // y
    // cars

// actions:
  // go
  // turn_right
  // turn_left
  // enhance_sensors
  // new_car
}
