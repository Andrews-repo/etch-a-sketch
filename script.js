const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

//event listeners for loading/changing the grid
window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

//initial grid that loads
function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

//uses "fr" fractional sizing to set grid size
function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//creates grid elements and fills in the main container
function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

//random background color generation
function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

//allows custom size options
function changeSize() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-100");
      changeSize();
    } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

//resets grid for new size
function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}