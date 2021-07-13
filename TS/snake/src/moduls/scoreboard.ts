class Scoreboard {
  score = 0; //分数
  level = 1; //等级

  scoreEle: HTMLElement | null;
  levelEle: HTMLElement | null;

  maxLevel: number; //最高等级
  upScore: number; //分数提升
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score");
    this.levelEle = document.getElementById("level");
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle!.innerHTML = ++this.score + "";
    if (this.score % this.upScore === 0) {
      this.upLevel();
    }
  }
  upLevel() {
    if (this.level < this.maxLevel) {
      this.levelEle!.innerHTML = ++this.level + "";
    }
  }
}

// const scorePanel = new Scoreboard(100, 2);
// for (let i = 0; i < 200; i++) {
//   scorePanel.addScore();
// }
export default Scoreboard;
