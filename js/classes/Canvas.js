class Canvas {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.element = document.createElement('canvas');
    this.context = this.element.getContext('2d');

    this.elements = [];

    let elements = document.getElementsByTagName('body');

    console.log(elements);
    console.log(elements.length);
    if (elements.length === 1) {
      document.body.appendChild(this.element);
    }
  }

  getContext() {
    return this.context;
  }

  reset() {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    //this.element.
  }

}
