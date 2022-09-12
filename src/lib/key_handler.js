export class KeyHandler {
  constructor(game) {
    this.game = game;
    this.init_key_events();
  }

  init_key_events() {
    document.body.addEventListener(
      'keyup',
      (e) => {
        const car = this.game.cars[0];
        switch(e.key) {
          case 'ArrowUp':
            car.take_action('go');
            break;
          case 'ArrowLeft':
            car.take_action('turn_left');
            break;
          case 'ArrowRight':
            car.take_action('turn_right');
            break;
          case 'e':
            car.take_action('enhance_sensors');
        }
      }
    )
  }

}
