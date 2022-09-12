import Utils from "../lib/utils.js"
import {Space} from "../models/space.js"

export class Grid {
  constructor (width, height) {
    this.width = width;
    this.height = height;
    this.rows = [];
    Utils.index_array(height).forEach((y) => {
      var row = [];
      Utils.index_array(width).forEach((x) => {
        row.push(
          new Space(x, y)
        );
      });
      this.rows.push(row);
    });
  }

  get(x, y) {
    const row = this.rows[y];
    if(row) {
      return row[x];
    } else {
      return null;
    }
  }
}
