import { CarInterface } from "./car_interface";

export class SpaceInterface {
  #space;
  #grid;

  constructor(space, grid) {
    this.#space = space;
    this.#grid = grid;
    this.x = space.x;
    this.y = space.y;
    this.visible = space.visible;
    this.cars = space.cars.map((car) => {
      return new CarInterface(car, grid);
    });
  }

}
