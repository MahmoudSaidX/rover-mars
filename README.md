# Rover Mars CLI

This CLI application simulates the movement of a rover on the surface of Mars.

## Installation

Before running the application, make sure you have Node.js v20 installed on your machine.

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the dependencies.

## Usage

To start the Rover Mars CLI, run the following command in your terminal:

```bash
npm run dev
```

Follow the prompts to input the coordinates, direction, obstacles (optional), and commands for the rover.

## Commands

- `F`: Move forward
- `B`: Move backwards
- `L`: Rotate left by 90 degrees
- `R`: Rotate right by 90 degrees

## Example

```bash
Enter the x-coordinate: 0
Enter the y-coordinate: 0
Enter the direction (NORTH, EAST, SOUTH, WEST): NORTH
Enter the obstacles (optional) as 1 2, 0 1:
Enter COMMANDS
F: Move forward,
B: Move backwards,
L: Rotate left by 90 degrees
R: Rotate right by 90 degrees: FFRLB
```

## Testing

To run the tests, execute the following command:

```bash
npm test
```