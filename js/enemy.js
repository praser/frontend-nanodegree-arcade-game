class Enemy {
  constructor(player){
    this.x = 0;
    this.y = Math.random() * 184 + 50;
    this.speed = Math.random() * 256;
    this.sprite = 'images/enemy-bug.png';
    this.player = player
  };

  update(dt) {
    this.x += this.speed * dt;
    if (this.x >= document.querySelector('canvas').width) {
      this.x = 0;
      this.y = Math.random() * 184 + 50;
      this.speed = Math.random() * 256;
    };

    this.checkColision();
  };

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  checkColision() {
    if (
      this.player.y + 131 >= this.y + 90
      && this.player.x + 25 <= this.x + 88
      && this.player.y + 73 <= this.y + 135
      && this.player.x + 76 >= this.x + 11) {
      this.player.lose();
    }
  }
}