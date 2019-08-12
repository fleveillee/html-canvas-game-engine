import {
  Background,
  BackgroundPosition,
  Canvas,
  CanvasPosition,
  CanvasRectangle,
  CanvasImageSprite,
  CanvasImageSpritePosition,
  Character,
} from '@spibo-studio/spibo-studio';
//from '../../spibo-studio/src/spibo-studio';

document.addEventListener('DOMContentLoaded', function(): void {
  const canvas = new Canvas(640, 650);

  const background = new Background('images/backgrounds/bg-forest-2.jpg', 1300, 650, true, new CanvasPosition(0, 0));
  background.restrictedZones.push(new CanvasRectangle(background.width, 560, new BackgroundPosition(0, 0)));
  background.restrictedZones.push(new CanvasRectangle(background.width, 200, new BackgroundPosition(0, 585)));
  canvas.background = background;

  const edgar = new Character('images/characters/edgar.gif', 355, 140, 100);
  edgar.pos = new CanvasPosition(20, 450);
  edgar.sprites.push(new CanvasImageSprite('movingUp', 80, 120, new CanvasImageSpritePosition(95, 10)));
  edgar.sprites.push(new CanvasImageSprite('movingDown', 80, 120, new CanvasImageSpritePosition(10, 10)));
  edgar.sprites.push(new CanvasImageSprite('movingLeft', 80, 120, new CanvasImageSpritePosition(265, 10)));
  edgar.sprites.push(new CanvasImageSprite('movingRight', 80, 120, new CanvasImageSpritePosition(180, 10)));
  edgar.setActiveSprite('movingDown');
  canvas.mainCharacter = edgar;
});
