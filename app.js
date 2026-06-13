import { knightMoves } from "./knight.js";
import { travails } from "./searching.js";
import { uiControl } from "./interface.js";

const control = (function () {
    knightMoves();
    uiControl();
})();