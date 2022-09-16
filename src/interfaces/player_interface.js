export class PlayerInterface {
  #player;

  constructor(player) {
    this.#player = player;
  }

  score() {
    return this.#player.score;
  }

  cars() {
    return this.#player.cars.map(
      (car) => {
        return {
          x: car.x,
          y: car.y,
          current: car.active,
          sensor_range: car.sensor_level   
        }
      }
    );
  }
}
