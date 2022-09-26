import { Space } from "../models/space";
import { CarInterface } from "./car_interface";
import { SpaceInterface } from "./space_interface";

export class GridInterface {
  #grid;
  #player;

  constructor(grid) {
    this.#grid = grid;
    this.height = this.#grid.height;
    this.width = this.#grid.width;
  }

  space_at(x, y) {
    return new SpaceInterface(
      this.#grid.get(x, y),
      this.#grid
    )
  }

  rows() {
    return this.#grid.rows.map(
      row => {
        return row.map(
          space => {
            return new SpaceInterface(space, this.#grid);
          }
        );
      }
    );
  }

  spaces() {
    var spaces = [];
    this.#grid.rows.forEach(
      row => {
        row.forEach(
          space => {
            spaces.push(
              new SpaceInterface(space, this.#grid)
            );
          }
        )
      }
    );
    return spaces;
  }

  visible_spaces() {
    return this.spaces().filter(
      space => {
        return space.visible;
      }
    );
  }

  foggy_spaces() {
    return this.spaces().filter(
      space => {
        return !space.visible;
      }
    );
  }

}
