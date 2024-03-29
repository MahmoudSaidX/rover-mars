class MarsRover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.obstacles = [];
  }

  setObstacles(obstacles) {
    this.obstacles = obstacles;
  }

  executeCommands(commands) {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      switch (command) {
        case 'F':
          this.moveForward();
          break;
        case 'B':
          this.moveBackward();
          break;
        case 'L':
          this.rotateLeft();
          break;
        case 'R':
          this.rotateRight();
          break;
        default:
          console.log(`Invalid command: ${command}`);
      }

      if (this.checkCollision()) {
        console.log(`(${this.x}, ${this.y}) ${this.direction} STOPPED`);
        break;
      }
    }

    console.log(`(${this.x}, ${this.y}) ${this.direction}`);
  }

  moveForward() {
    switch (this.direction) {
      case 'NORTH':
        this.y++;
        break;
      case 'EAST':
        this.x++;
        break;
      case 'SOUTH':
        this.y--;
        break;
      case 'WEST':
        this.x--;
        break;
    }
  }

  moveBackward() {
    switch (this.direction) {
      case 'NORTH':
        this.y--;
        break;
      case 'EAST':
        this.x--;
        break;
      case 'SOUTH':
        this.y++;
        break;
      case 'WEST':
        this.x++;
        break;
    }
  }

  rotateLeft() {
    switch (this.direction) {
      case 'NORTH':
        this.direction = 'WEST';
        break;
      case 'EAST':
        this.direction = 'NORTH';
        break;
      case 'SOUTH':
        this.direction = 'EAST';
        break;
      case 'WEST':
        this.direction = 'SOUTH';
        break;
    }
  }

  rotateRight() {
    switch (this.direction) {
      case 'NORTH':
        this.direction = 'EAST';
        break;
      case 'EAST':
        this.direction = 'SOUTH';
        break;
      case 'SOUTH':
        this.direction = 'WEST';
        break;
      case 'WEST':
        this.direction = 'NORTH';
        break;
    }
  }

  checkCollision() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      if (this.x === obstacle[0] && this.y === obstacle[1]) {
        return true;
      }
    }
    return false;
  }
}

// Case 1: There's no obstacles
console.log("\nTest Case 1: No obstacles encountered\n")
const rover1 = new MarsRover(0, 0, 'NORTH');
rover1.executeCommands('FFRFF');

// Case 2: There's an obstacle
console.log("\nTest Case 2: Collision with an obstacle\n")
const rover2 = new MarsRover(0, 0, 'NORTH');
rover2.setObstacles([[1, 1], [2, 2]]);
rover2.executeCommands('FFRFF');


// Case 3: Backward movement and rotations
console.log("\nTest Case 3: Backward movement and rotations\n")
const rover3 = new MarsRover(3, 3, 'WEST');
rover3.executeCommands('RRBB');

// Case 4: Invalid command
console.log("\nTest Case 4: Invalid command\n")
const rover4 = new MarsRover(0, 0, 'NORTH');
rover4.executeCommands('FFX');

// Case 5: Starting at negative coordinates
console.log("\nTest Case 5: Starting at negative coordinates\n")
const rover5 = new MarsRover(-2, -2, 'SOUTH');
rover5.executeCommands('BLB');

// Case 6: Obstacle encountered at the start position
console.log("\nTest Case 6: Obstacle encountered at the start position\n")
const rover6 = new MarsRover(5, 5, 'WEST');
rover6.setObstacles([[5, 5]]);
rover6.executeCommands('F');

module.exports = MarsRover;