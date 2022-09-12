import "./style/grid.css"

import {Game} from './models/game.js';
import { HtmlRenderer } from './renderers/html_renderer.js';
import { KeyHandler } from './lib/key_handler.js';

var game = new Game(
  {
    renderer: HtmlRenderer,
    height: 11,
    width: 11,
    start_x: 5,
    start_y: 5
  }  
);

var key_handler = new KeyHandler(game);

window.game = game;
window.key_handler = key_handler;
