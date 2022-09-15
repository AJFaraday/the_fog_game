import { Controller } from "@hotwired/stimulus"
import { Game } from "../models/game";

export default class extends Controller {
  test(e) {
    const key_code = e.target.dataset.keycode;
    key_handler.take_action(key_code);
  }
}