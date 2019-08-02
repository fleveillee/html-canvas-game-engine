// import {Canvas, Character, Sprite} from '@spibo-studio/spibo-studio';
import {Canvas, Character, Sprite} from '../../spibo-studio/src/spibo-studio';

document.addEventListener("DOMContentLoaded", function (): void {

  const canvas = new Canvas(640, 480);

  const edgar = new Character("images/characters/edgar.gif", 355, 140, 5);
  edgar.sprites.push(new Sprite('movingUp', 95, 10, 80, 120));
  edgar.sprites.push(new Sprite('movingDown', 10, 10, 80, 120));
  edgar.sprites.push(new Sprite('movingLeft', 265, 10, 80, 120));
  edgar.sprites.push(new Sprite('movingRight', 180, 10, 80, 120));
  edgar.setActiveSprite('movingDown');
  canvas.mainCharacter = edgar;
});
