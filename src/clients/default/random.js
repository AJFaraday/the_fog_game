module.exports = class {

  constructor(api) {
    this.api = api;
    this.actions = [
        'go', 'turn_left', 'turn_right', 'enhance_sensors'
    ];
  }

  turn() {
    const cars = this.api.player.cars()
    const car = cars[
      Math.floor(
        Math.random() * cars.length
      )  
    ];
    car.take_action(
      this.actions[
        Math.floor(
          Math.random() * this.actions.length
        )
      ]  
    );
  }
}
