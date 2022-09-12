import Utils from '../lib/utils.js'
export class HtmlRenderer{
  constructor(grid) {
    this.grid = grid;
    this.div = document.getElementById('fog_game');
    this.draw();
  }

  draw() {
    this.div.innerHTML = "";
    var table = Utils.build_element('table', {class: 'fog_board'});
    this.grid.rows.forEach((row) => {
      var html_row = Utils.build_element('tr');
      row.forEach((space) => {
        var td = Utils.build_element(
          'td',
          {class: (space.visible ? "land" : "fog")}
        );
        if(space.cars.length > 0) {
          space.cars.forEach((car) => {
            td.append(this.car_div(car));
          });
        }
        html_row.append(td);
      });
      table.append(html_row);
    });
    this.div.append(table);
  }

  car_div(car) {
    return Utils.build_element(
      'img', 
      {
        class: `car ${car.direction()}`,
        src: './assets/car_small.png'
      }
    );
  }
}
