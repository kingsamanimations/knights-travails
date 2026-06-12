import { knightMoves } from "./knight.js";

const squareReg =  new Map();

// Get and Set current coords to the board
const chessSquare = (x, y) => {
    const xPos = x;
    const yPos = y;
    let predecessor;

    // Define array for possible moves
    const MOVES = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1,], [-2, -1],
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    const name = () => `${x}, ${y}`;

    // Evaulate possible moves for knight against any offsets
    const moves = () => {
        return MOVES
            .map((offset) => newSquareForm(offset[0], offset[1]))
            .filter((square) => square != undefined);
    }


    // Evaluate new set of square coords
    const newSquareForm = (pageXOffset, pageYOffset) => {
        const [newX, newY] = [xPos + pageXOffset, yPos + pageYOffset];
        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
            return chessSquare(newX, newY);
        }
    }

    // Get and set map constructor object names
    if (squareReg.has(name())) {
        return squareReg.get(name());
    } else {
        const newSquare = { name, getPredecessor, setPredecessor, moves};
        squareReg.set(name(), newSquare);
        return newSquare;
    }

};

// Take click coords from user and running search algorithm
const travails = (begin, end) => {
    squareReg.clear(); // Removes old values

    const origin = chessSquare (...begin);
    const target = chessSquare (...end);

    const queue = [origin];
    while (!queue.includes(target)) {
        const currentSquare = queue.shift();

        const queueList = currentSquare.moves();

        queueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(... queueList);
    }

    const path = [target]
    while(!path.includes(origin)) {
        const prevSquare = path[0].getPredecessor();
        path.unshift(prevSquare);
    }
    console.log(`You made it in ${path.length - 1} moves!`);
    console.log(`Here's the path:`);
    path.forEach(square => console.log(square.name()));
}


export { travails };