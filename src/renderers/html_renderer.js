import Utils from '../lib/utils.js'
export class HtmlRenderer{
  constructor(game) {
    this.game = game;
    this.div = document.getElementById('fog_game');
    this.draw();
  }

  draw() {
    this.div.innerHTML = "";

    this.draw_score();

    var table = Utils.build_element('table', {class: 'fog_board'});
    this.game.grid.rows.forEach((row) => {
      var html_row = Utils.build_element('tr');
      row.forEach((space) => {
        var td = Utils.build_element(
          'td',
          {class: (space.visible ? "land" : "fog")}
        );
        var div = Utils.build_element('div');
        if(space.cars.length > 0) {
          space.cars.forEach((car) => {
            div.append(this.car_img(car));
          });
        }
        td.append(div);
        html_row.append(td);
      });
      table.append(html_row);
    });
    this.div.append(table);
  }

  draw_score() {
    var div = Utils.build_element('div', {class: 'score_display'});
    div.innerHTML = `Score: ${this.game.player.score}`
    this.div.append(div);
  }

  car_img(car) {
    const dir_class = car.direction();
    const active_class = (car.active ? 'active' : 'inactive');
    return Utils.build_element(
      'img', 
      {
        class: `car ${dir_class} ${active_class}`,
        src: './assets/car_small.png'
      }
    );
  }
}
