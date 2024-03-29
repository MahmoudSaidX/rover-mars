const readline = require('readline');
const MarsRover = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startRover() {
  rl.question('\n\nEnter the x-coordinate: ', (x) => {
    rl.question('Enter the y-coordinate: ', (y) => {
      rl.question('Enter the direction (NORTH, EAST, SOUTH, WEST): ', (direction) => {
        const rover = new MarsRover(Number(x), Number(y), direction.toUpperCase());

        rl.question('Enter the obstacles (optional) as 1 2, 0 1: ', (obstacles) => {
          if (obstacles.trim() !== '') {
            const obstacleList = obstacles.split(',').map((obstacle) => {
              const [obstacleX, obstacleY] = obstacle.split(' ');
              return [Number(obstacleX), Number(obstacleY)];
            });
            rover.setObstacles(obstacleList);
          }

          rl.question('Enter COMMANDS \n\tF: Move forward, \n\tB: Move backwards, \n\tL: Rotate left by 90 degrees \n\tR: Rotate right by 90 degrees: ', (commands) => {
            rover.executeCommands(commands.toUpperCase());
            rl.close();
          });
        });
      });
    });
  });
}

startRover();