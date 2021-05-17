import Food from "./food";
import Snake from "./snake";
class ControlGame {
  food: Food;
  snake: Snake;

  direction: string = "Down";
  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.init();
  }

  init() {
    document.addEventListener("keydown", this.keyDownHanler.bind(this));
    this.run();
  }
  keyDownHanler(event: KeyboardEvent) {
    console.log("documment.addEventListener  ", event);
    this.direction = event.key;
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        // 向上移动 top 减少
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        // 向下移动 top 增加
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        // 向左移动 left 减少
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        // 向右移动 left 增加
        X += 10;
        break;
    }
    // X += 10;
    // setTimeout(() => {
    this.snake.X = X;
    this.snake.Y = Y;
    //   this.run();
    // }, 300);
  }
}
export default ControlGame;
