// Enemies our player must avoid
var global = this
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    this.x = x; // Sets initial x position in canvas
    this.y = y; // Sets initial y position in canvas
    this.speed = speed; // This is the speed enemies will move in canvas.

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    // make enemies loop to left side of canvas after reaching canvas.width
    if (this.x >= document.querySelector('canvas').width) {
        this.x = 0;
    };

    this.checkColision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkColision = function(){
    if (
        player.y + 131 >= this.y + 90
        && player.x + 25 <= this.x + 88
        && player.y + 73 <= this.y + 135
        && player.x + 76 >= this.x + 11) {
        player.lose();
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
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

Player.prototype.setY = function(value) {
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

Player.prototype.setX = function(value) {
    var limits = [2.5, 402.5];
    if (value < limits[0]){
        this.x = limits[0]
    } else if (value > limits[1]) {
        this.x = limits[1];
    } else {
        this.x = value;
    }
}

Player.prototype.win = function(){
    if (this.y == -13) {
        alert('You win!');
        this.reset();
    }
}

Player.prototype.lose = function() {
    alert('You lose!');
    this.reset();
}

Player.prototype.reset = function() {
    this.setX(202.5);
    this.setY(383);
}

// Now instantiate your objects. 
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
allEnemies.push(enemy);
var player = new Player(202.5, 383, 50);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
