const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

function changeColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize() {
    let newSize = prompt("Enter a new size")

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
            alert("Enter a number between 1-100");
            changeSize();
        } else {
            clearGrid();
            setGridSize();
            fillGrid(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.chldNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}