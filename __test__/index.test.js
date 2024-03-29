const MarsRover = require('../main/index');

describe('MarsRover', () => {
  describe('Test Case 1: No obstacles encountered', () => {
    it('should execute commands correctly and reach the final position', () => {
      const rover = new MarsRover(0, 0, 'NORTH');
      rover.executeCommands('FFRFF');
      expect(rover.x).toBe(2);
      expect(rover.y).toBe(2);
      expect(rover.direction).toBe('EAST');
    });
  });

  describe('Test Case 2: Collision with an obstacle', () => {
    it('should stop when encountering an obstacle', () => {
      const rover = new MarsRover(0, 0, 'NORTH');
      rover.setObstacles([[1, 1], [2, 2]]);
      rover.executeCommands('FFRFF');
      expect(rover.x).toBe(2);
      expect(rover.y).toBe(2);
      expect(rover.direction).toBe('EAST');
    });
  });

  describe('Test Case 3: Backward movement and rotations', () => {
    it('should execute commands correctly and reach the final position', () => {
      const rover = new MarsRover(3, 3, 'WEST');
      rover.executeCommands('RRBB');
      expect(rover.x).toBe(1);
      expect(rover.y).toBe(3);
      expect(rover.direction).toBe('EAST');
    });
  });

  describe('Test Case 4: Invalid command', () => {
    it('should handle invalid commands', () => {
      const rover = new MarsRover(0, 0, 'NORTH');
      rover.executeCommands('FFX');
      expect(rover.x).toBe(0);
      expect(rover.y).toBe(2);
      expect(rover.direction).toBe('NORTH');
    });
  });

  describe('Test Case 5: Starting at negative coordinates', () => {
    it('should execute commands correctly and reach the final position', () => {
      const rover = new MarsRover(-2, -2, 'SOUTH');
      rover.executeCommands('BLB');
      expect(rover.x).toBe(-3);
      expect(rover.y).toBe(-1);
      expect(rover.direction).toBe('EAST');
    });
  });

  describe('Test Case 6: Obstacle encountered at the start position', () => {
    it('should stop immediately at the start position', () => {
      const rover = new MarsRover(5, 5, 'WEST');
      rover.setObstacles([[5, 5]]);
      rover.executeCommands('F');
      expect(rover.x).toBe(4);
      expect(rover.y).toBe(5);
      expect(rover.direction).toBe('WEST');
    });
  });
});