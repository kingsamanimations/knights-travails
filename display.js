const displaying = (path, squareCoord) => {
    // Remove p tags from last moves
    if (document.querySelector("p") !== null) {
        const displayDiv = document.querySelector("div");
        const pNodes = displayDiv.querySelectorAll("p");
        pNodes.forEach((pNode) => pNode.remove());
    }

    const displayDiv = document.querySelector("div");
    const moveIt = document.createElement("p");
    const coordList = document.createElement("p");

    moveIt.textContent = `You made it in ${path.length - 1} moves!`;
    coordList.innerHTML = squareCoord.join("<br>");
    displayDiv.appendChild(moveIt);
    displayDiv.appendChild(coordList);
}

export { displaying };