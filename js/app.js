console.log(global)
const player = new Player(202.5, 383, 50);
const enemy1 = new Enemy(player);
const enemy2 = new Enemy(player);
const enemy3 = new Enemy(player);
const allEnemies = [enemy1, enemy2, enemy3];

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});