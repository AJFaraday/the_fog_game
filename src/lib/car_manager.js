export class CarManager {

  constructor(game) {
    this.game = game;
    this.car_index = 0;
  }

  next_car() {
    if(this.game.cars.length > 0) {
      this.car_index += 1;
      this.car_index %= this.game.cars.length;
      this.set_active();
    }
  }

  previous_car() {
    if(this.game.cars.length > 0) {
        this.car_index -= 1;
        this.car_index += this.game.cars.length;
        this.car_index %= this.game.cars.length;
        this.set_active();
      } 
  }

  set_car(index) {
    if(this.game.cars.length >= index) {
      this.car_index = (index - 1);
      this.set_active();
    }
  }

  set_active() {
    this.game.cars.forEach(
        (car, index) => {
          if (index == this.car_index) {
            car.active = true;
            this.game.active_car = car;
          } else {
            car.active = false; 
          }
        }
      );
    }

}
