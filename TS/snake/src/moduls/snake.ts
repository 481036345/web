class Snake {
  snake: HTMLElement;
  head: HTMLElement;
  bodys: HTMLCollection;
  constructor() {
    this.snake = document.getElementById("snake")!;
    console.log("snakeeee   ", this.snake);
    this.head = this.snake.querySelector("div")!;
    this.bodys = this.snake.getElementsByTagName("div")!;
  }

  get X() {
    console.log("head dd  ", this.head);

    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value) {
    console.log("value   ", value);

    if (this.X === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("🐍撞墙了 ~~呜呜  ");
    }

    this.head.style.left = value + "px";
  }
  set Y(value) {
    if (this.Y === value) {
      return;
    }
    if (value < 0 || value > 290) {
      throw new Error("🐍撞墙了 ~~呜呜  ");
    }

    this.head.style.top = value + "px";
  }
}
export default Snake;
