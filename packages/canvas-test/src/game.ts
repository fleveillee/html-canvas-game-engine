import {
  Background,
  BackgroundPosition,
  Boundaries,
  Canvas,
  CanvasPosition,
  CanvasRectangle,
  CanvasImageSprite,
  CanvasImageSpritePosition,
  Character,
} from '@spibo-studio/spibo-studio'; // '../../spibo-studio/src/spibo-studio';

function getEdgar(): Character {
  const edgar = new Character('images/characters/edgar.gif', 355, 140, 100);

  edgar.sprites.push(new CanvasImageSprite('movingUp', 80, 120, new CanvasImageSpritePosition(95, 10)));
  edgar.sprites.push(new CanvasImageSprite('movingDown', 80, 120, new CanvasImageSpritePosition(10, 10)));
  edgar.sprites.push(new CanvasImageSprite('movingLeft', 80, 120, new CanvasImageSpritePosition(265, 10)));
  edgar.sprites.push(new CanvasImageSprite('movingRight', 80, 120, new CanvasImageSpritePosition(180, 10)));
  edgar.setActiveSprite('movingDown');

  return edgar;
}

function drawBg2(canvas: Canvas): void {
  const background = new Background('images/backgrounds/bg-forest-1.jpg', 1300, 650, true, new CanvasPosition(0, 0));
  background.restrictedZones.push(new CanvasRectangle(background.width, 570, new BackgroundPosition(0, 0)));
  background.restrictedZones.push(new CanvasRectangle(background.width, 200, new BackgroundPosition(0, 585)));
  background.gateways.push(
    new CanvasRectangle(10, 100, new BackgroundPosition(20, 550), (): void => drawBg1(canvas, 'right')),
  );
  canvas.background = background;

  const edgar = canvas.mainCharacter ? canvas.mainCharacter : getEdgar();
  edgar.pos = new CanvasPosition(30, 450);
  canvas.mainCharacter = edgar;
}

function drawBg1(canvas: Canvas, origin = 'left'): void {
  let bgPosition;
  let edgarPosition;
  const edgar = canvas.mainCharacter ? canvas.mainCharacter : getEdgar();

  if (origin === 'left') {
    bgPosition = new CanvasPosition(0, 0);
    edgarPosition = new CanvasPosition(20, 450);
  } else {
    bgPosition = new CanvasPosition(1300 - canvas.width, 0);
    if (edgar.activeSprite)
      edgarPosition = new CanvasPosition(canvas.boundaries.right - edgar.activeSprite.width - 5, 450);
  }

  const background = new Background('images/backgrounds/bg-forest-2.jpg', 1300, 650, true, bgPosition);
  background.restrictedZones.push(new CanvasRectangle(background.width, 560, new BackgroundPosition(0, 0)));
  background.restrictedZones.push(new CanvasRectangle(background.width, 200, new BackgroundPosition(0, 585)));
  background.gateways.push(
    new CanvasRectangle(10, 100, new BackgroundPosition(1270, 500), (): void => drawBg2(canvas)),
  );

  edgar.pos = edgarPosition;

  canvas.background = background;
  canvas.mainCharacter = edgar;
}

document.addEventListener('DOMContentLoaded', (): void => {
  const canvas = new Canvas(1000, 650, new Boundaries(20, 980, 630, 20), 20);
  drawBg1(canvas);
});
