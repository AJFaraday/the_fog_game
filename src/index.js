import "./style/grid.css";
import "./style/instructions.css";

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

// Click on instructions to act
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))