
import { travails } from "./searching.js";

const uiControl = () => {
    const cellNodes = document.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {
        
        // Loop through cells to find knight img + assign coords
        if (cellNode.querySelector("img") !== null) {
            let knightLocate = JSON.parse("[" + cellNode.dataset.coordArray + "]");
            console.log("The knight's current location ", knightLocate);
        }

        // Loop through cells + attach click listeners to each
        cellNode.addEventListener("click", function() {
            let clickedLocation = JSON.parse("[" + cellNode.dataset.coordArray + "]");
            console.log(cellNode.dataset.coordArray);
            console.log("Clicked on location ", clickedLocation);

            // Repeat loop whilst locating new location of previous knight
            const cellNodes = document.querySelectorAll("td");
            cellNodes.forEach((cellNode) => {
                if (cellNode.querySelector("img") !== null) {
                    let knightLocate = JSON.parse("[" + cellNode.dataset.coordArray + "]");
                    console.log("The knight's current location ", knightLocate);
                    const oldKnight = cellNode.querySelector("img");
                    console.log(document.querySelector("img"));
                    if (oldKnight) {
                        oldKnight.remove();
                    }
                    travails(knightLocate, clickedLocation);
                }
            });

            // New knight image in new location
            const newKnight = document.createElement("img");
            newKnight.src = "./svg-images/svgviewer-output(2).svg";
            newKnight.style.width = "50px";
            newKnight.style.height = "50px";
            cellNode.appendChild(newKnight);
        });
    });

};

export { uiControl };