class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("foot")!;
  }

  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.top = top + "px";
    this.element.style.left = left + "px";
  }
}
const f = new Food();
console.log("xxx  ", f.X);
f.change();
console.log("yyyy", f.Y);

export default Food;
