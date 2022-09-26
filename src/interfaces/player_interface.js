import { CarInterface } from "./car_interface.js";

export class PlayerInterface {
  #player;
  #grid;

  constructor(player, grid) {
    this.#player = player;
    this.#grid = grid;
  }

  score() {
    return this.#player.score;
  }

  cars() {
    return this.#player.cars.map(
      (car) => {
        return new CarInterface(car, this.#grid);
      }
    );
  }
}
