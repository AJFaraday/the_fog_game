export class KeyHandler {
  constructor(game) {
    this.game = game;
    this.init_key_events();
  }

  init_key_events() {
    document.body.addEventListener(
      'keyup',
      (e) => {
        this.take_action(e.code);
      }
    )
  }

  take_action(key_code) {
    const car = this.game.active_car;
    const digit_match = key_code.match(/Digit([0-9])/)
    switch(key_code) {
      case 'ArrowUp':
        car.take_action('go');
        break;
      case 'ArrowLeft':
        car.take_action('turn_left');
        break;
      case 'ArrowRight':
        car.take_action('turn_right');
        break;
      case 'KeyE':
        car.take_action('enhance_sensors');
        break;
      case 'KeyN':
        car.take_action('new_car');
        break;
      case 'Comma':
        this.game.previous_car();
        this.game.draw();
        break;
      case 'Period':
        this.game.next_car();
        this.game.draw();
        break;x
      case key_code.match(/Digit([0-9])/)?.input:
        this.game.set_car(
          parseInt(digit_match[1])
        );
        this.game.draw();
    }
  }

}
