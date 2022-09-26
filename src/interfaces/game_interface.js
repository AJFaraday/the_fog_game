export class GameInterface {
  #game;
  
  constructor(game) {
    this.#game = game;
  }

  turn() {
    return this.#game.turn;
  }
}