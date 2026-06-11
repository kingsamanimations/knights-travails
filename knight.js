const knightMoves = () => {

    // Variables and chessboard table
    const defaultStartLocation = [0,0];
    const coordArray = [];
    const chessBoard = document.createElement("table");

    // Board cells with applied position values to each cell
    chessBoard.setAttribute("class", "center");
    for (let i = 0; i < 8; i++) {
        const tableRow = document.createElement("tr");
        let cellRowCoord = Math.abs(i - 7);
        tableRow.textContent = cellRowCoord;

        for (let z = 0; z < 8; z++) {
            const tableCell =  document.createElement("td");
            let cellcollumnCoord = z;
            tableRow.textContents = `${cellRowCoord},${cellcollumnCoord}`;

            // Looping through to shade odd value cells (1, 3, 5, etc)
            if ((i + z) % 2 == 0) {
                tableCell.setAttribute("class", "cell white");
                tableRow.append(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellcollumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.slice(0, 2);
            } else {
                tableCell.setAttribute("class", "cell black");
                tableRow.append(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellcollumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.slice(0, 2);
            }
        }
        chessBoard.appendChild(tableRow);
    }

    // Create Knight at position 0,0;
    const cellNodes = chessBoard.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {
        if (defaultStartLocation.toString() === cellNode.dataset.coordArray) {
            let knight = document.createElement("img");
            knight.src = "./svg-images/svgviewer-output(2).svg";
            cellNode.appendChild(knight);
        }
    });

    // Displaying the chess board with html ID
    const displayContainer = document.getElementById("display-div-centre");
    displayContainer.appendChild(chessBoard);
}

export { knightMoves };
