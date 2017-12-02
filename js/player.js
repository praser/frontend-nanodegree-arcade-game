class Player {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
  };

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  update() {}

  handleInput(keyPress) {
    switch(keyPress) {
      case 'up':
        this.setY(this.y - this.speed);
        break;
      case 'down':
        this.setY(this.y + this.speed);
        break;
      case 'left':
        this.setX(this.x - this.speed);
        break;
      case 'right':
        this.setX(this.x + this.speed);
        break;
    };
  };

  setY(value) {
    var limits = [-13, 433];
    if (value < limits[0]){
      this.y = limits[0]
    } else if (value > limits[1]) {
      this.y = limits[1];
    } else {
      this.y = value;
    }

    this.win();
  }

  setX(value) {
    var limits = [2.5, 402.5];
    if (value < limits[0]){
      this.x = limits[0]
    } else if (value > limits[1]) {
      this.x = limits[1];
    } else {
      this.x = value;
    }
  }

  win() {
    if (this.y == -13) {
      alert('You win!');
      this.reset();
    }
  }

  lose() {
    alert('You lose!');
    this.reset();
  }

  reset() {
    this.setX(202.5);
    this.setY(383);
  }
}