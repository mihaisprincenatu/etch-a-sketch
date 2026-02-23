const container = document.querySelector("#container");

function generateGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.flexBasis = `${100 / gridSize}%`
      container.appendChild(gridItem)
    }
  }
}

generateGrid(16);