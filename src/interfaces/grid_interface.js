export class GridInterface {
  #grid;
  #player;

  constructor(grid) {
    this.#grid = grid;
  }

  height() {
    return this.#grid.height;
  }

  width() {
    return this.#grid.width;
  }

  spaces() {
    var spaces = [];
    this.#grid.rows.forEach(
      row => {
        row.forEach(
          space => {
            const cars = space.cars.map(
              car => {
                return {
                  direction: car.direction(),
                  sensor_range: car.sensor_level,
                  index: car.index
                }
              }
            )
            spaces.push({
              x: space.x,
              y: space.y,
              visible: space.visible,
              cars: cars
            });
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
