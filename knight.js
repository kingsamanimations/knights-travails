const knightMoves = () => {

    // Variables and chessboard table
    const defaultStartLocation = [3,3];
    const coordArray = [];
    const chessBoard = document.createElement("table");

    // Board cells with applied position values to each cell
    chessBoard.setAttribute("class", "center");
    for (let i = 0; i < 8; i++) {
        const tableRow = document.createElement("tr");
        let cellRowCoord = Math.abs(i - 7);

        for (let z = 0; z < 8; z++) {
            const tableCell =  document.createElement("td");
            let cellcollumnCoord = z;
            tableCell.dataset.coordArray = `${cellRowCoord},${cellcollumnCoord}`;

            // tableCell.setAttribute("class", (i + z) % 2 == 0 ? "cell white" : "cell black");

            // Looping through to shade odd value cells (1, 3, 5, etc)
            if ((i + z) % 2 == 0) {
                tableCell.setAttribute("class", "cell white");
                tableRow.append(tableCell);
                tableCell.dataset.coordArray = `${cellRowCoord},${cellcollumnCoord}`;
            } else {
                tableCell.setAttribute("class", "cell black");
                tableRow.append(tableCell);
                tableCell.dataset.coordArray = `${cellRowCoord},${cellcollumnCoord}`;
            }
        }
        chessBoard.appendChild(tableRow);
    }

    // Create Knight at position 0,0;
    const cellNodes = chessBoard.querySelectorAll("td");


    cellNodes.forEach((cellNode) => {
        if (cellNode.dataset.coordArray === defaultStartLocation.toString()) {
            const knight = document.createElement("img");
            knight.src = "./svg-images/svgviewer-output(2).svg";
            knight.style.width = "50px";
            knight.style.height = "50px";
            cellNode.appendChild(knight);
        }
    });

    // Displaying the chess board with html ID
    const displayContainer = document.getElementById("display-div-centre");
    displayContainer.appendChild(chessBoard);
}

export { knightMoves };
