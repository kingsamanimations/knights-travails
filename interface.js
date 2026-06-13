import { cli } from "webpack";
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
            console.log("Clicked on location ", clickedLocation);

            // Repeat loop whilst locating new location of previous knight
            const cellNodes = document.querySelector("td");
            cellNodes.forEach((cellNode) => {
                if (cellNode.querySelector("img") !== null) {
                    let knightLocate = JSON.parse("[" + cellNode.dataset.coordArray + "]");
                    console.log("The knight's current location ", knightLocate);
                    const knightImg = document.querySelector("img");
                    knightImg.remove();
                    travails(knightLocate, clickedLocation);
                }
            });

            // New knight image in new location
            const knightImg = document.querySelector("img");
            knightImg.src = "./svg-images/svgviewer-output(2).svg";
            knightImg.style.width = "50px";
            knightImg.style.height = "50px";
            cellNode.appendChild(knightImg);
        });
    });

};

export { uiControl };