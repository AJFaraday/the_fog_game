export class Car {

  static Directions = ['N', 'E', 'S', 'W'];

  static ActionCosts = {
    go: 1,
    turn_left: 1,
    turn_right: 1,
    enhance_sensors: 10,
    new_car: 5
  }

  constructor(player, x, y, index, direction_index) {
    this.player = player;
    this.game = player.game;
    this.x = x;
    this.y = y;
    this.index = index;
    this.direction_index = direction_index;
    this.sensor_level = 0;
    this.current_space = this.game.grid.get(x, y);
    this.active = false;
    this.sense();
  }

  direction() {
    return Car.Directions[
      Math.abs(this.direction_index % 4)
    ];
  }

  turn_right() {
    this.direction_index += 1;
    this.direction_index %= 4;
  }

  turn_left() {
    this.direction_index += 3;
    this.direction_index %= 4;
  }

  go() {
    switch(this.direction()) {
      case 'N':
        this.y -= 1;
        break; 
      case 'E':
        this.x += 1;
        break;
      case 'S':
        this.y += 1;
        break;
      case 'W':
        this.x -= 1;
    }
    this.set_space();
  }

  new_car() {
    this.player.new_car(this.x, this.y, this.direction_index);
  }

  enhance_sensors() {
    this.sensor_level += 1;
    this.sense();
  }

  sense() {
    this.see_space(this.x, this.y);
    if(this.sensor_level > 0) {
      Utils.index_array(this.sensor_level).forEach(
        (offset) => {
          this.see_space(this.x + offset + 1, this.y);
          this.see_space(this.x - offset - 1, this.y);
          this.see_space(this.x, this.y + offset + 1);
          this.see_space(this.x, this.y - offset - 1);
        }
      )
    }
  }

  see_space(x, y) {
    const space = this.game.grid.get(x, y);
    if (space) {
      space.visible = true;
    }
  }

  take_action(action) {
    var cost = Car.ActionCosts[action];
    if(cost) {
      this.player.score += cost;
      this[action]();
      this.sense();
      this.game.end_turn(this.player);
      this.game.draw();
    } else {
      console.log(`No action named ${action} was found`);
    }
  }

  set_space() {
    if (this.current_space) {
      Utils.remove_from_array(this.current_space.cars, this);
    }
    this.current_space = this.game.grid.get(this.x, this.y);
    if (this.current_space) {
      this.current_space.cars.push(this);
    }
  }

}
