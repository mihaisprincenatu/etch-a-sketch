const container = document.querySelector("#container");
const button = document.querySelector("button");

function generateGrid(gridSize) {
  container.textContent="";
  gridSize = Math.min(gridSize, 100);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.flexBasis = `${100 / gridSize}%`
      gridItem.addEventListener("mouseenter", (e) => {
        e.target.classList.add("hovered-grid-item");
      })
      container.appendChild(gridItem)
    }
  }
}

button.addEventListener("click", (e) => {
  let newGridSize = +prompt("Enter grid size (up to 100):", 16);
  while (isNaN(newGridSize)) {
    newGridSize = +prompt("Not a number, try again. Enter grid size (up to 100):", 16);
  }
  while (newGridSize <= 0) {
    newGridSize = +prompt("Positive values only. Enter grid size (up to 100):", 16);
  }
  generateGrid(newGridSize);
})

generateGrid(16);