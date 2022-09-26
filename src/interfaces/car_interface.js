export class CarInterface {
  #car;
  #grid;

  constructor(car, grid) {
    this.#car = car;
    this.#grid = grid;
    this.#update_params();
  }

  distance_to_n() {
    return this.#car.y;
  }

  distance_to_w() {
    return this.#car.x;
  }

  distance_to_e() {
    return this.#grid.width - this.#car.x - 1;
  }

  distance_to_s() {
    return this.#grid.height - this.#car.y - 1;
  }

  take_action(action) {
    const car_manager = this.#car.player.car_manager;
    car_manager.car_index = this.#car.index;
    car_manager.set_active();
    this.#car.take_action(action);
    this.#update_params();
  }

  #update_params() {
    this.x = this.#car.x;
    this.y = this.#car.y;
    this.sensor_range = this.#car.sensor_level;
    this.direction = this.#car.direction();
  }
    
}
