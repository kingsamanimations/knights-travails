import { knightMoves } from "./knight.js";
import { travails } from "./searching.js";

const control = (function () {
    knightMoves();
    travails([3,3],[4,3]);
})();