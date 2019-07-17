class Character {
  constructor(xPos, yPos, width, height, speed) {
    this.width = width;
    this.height = height;
    this.xPos = xPos;
    this.yPos = yPos;
    this.speed = speed;
  }

  draw(gbc) {
    console.log(this.sprites);
    this.img = gbc.drawImage(this.sprites, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
    //canvasRenderingContext2D.stroke();
  }

  setSprites(imgId) {
    this.sprites = document.getElementById(imgId);
  }

  moveUp(gbc) {
    if (this.yPos - this.speed < 0) {
      this.yPos = 0;
    } else {
      this.yPos -= this.speed;
    }
    gbc.clearRect(0, 0, 640, 480);
    this.img = gbc.drawImage(this.sprites, 15 + this.width, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
  }

  moveDown(gbc) {
    this.yPos += this.speed;
    gbc.clearRect(0, 0, 640, 480);
    this.img = gbc.drawImage(this.sprites, 10, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
  }

  moveLeft(gbc) {
    if (this.xPos - this.speed < 0) {
      this.xPos = 0;
    } else {
      this.xPos -= this.speed;
    }
    gbc.clearRect(0, 0, 640, 480);
    this.img = gbc.drawImage(this.sprites, 25 + this.width * 3, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
  }

  moveRight(gbc) {
    this.xPos += this.speed;
    gbc.clearRect(0, 0, 640, 480);
    this.img = gbc.drawImage(this.sprites, 20 + this.width * 2, 10, this.width, this.height, this.xPos, this.yPos, this.width, this.height);
  }

}
