import "../style.css";
import { grid } from "./SudokuBoard";
export function startGame(mainContainer: HTMLDivElement) {
  console.log(grid);
  mainContainer.appendChild(creation());
  // mainContainer.appendChild(createGrid());
}
// creation nombre alternatif
function createNumber() {
  return Math.floor(Math.random() * 9) + 1;
}
// creation tableau 2D
function creatTabDeux() {
  let GrandTab = [];
  for (let i = 0; i < 9; i++) {
    let petitTab = [];
    for (let y = 0; y < 9; y++) {
      petitTab.push(createNumber());
    }
    GrandTab.push(petitTab);
  }
  return GrandTab;
}
console.log(creatTabDeux());

// functions regles sudoku
//verification ligne

function checkRow() {
  let number = creatTabDeux();
  for (let i = 0; i < number.length; i++) {
    for (let y = 0; y < number[i].length; y++) {}
  }
}

// creation grid visuel
function creation(): HTMLDivElement {
  let number = creatTabDeux();
  const grid = document.createElement("div");
  grid.classList.add("cssGrid");
  for (let i = 1; i < number.length; i++) {
    const row = document.createElement("div");
    row.textContent = "";
    row.classList.add("stylecontainerCel");
    for (let y = 1; y < number[i].length; y++) {
      const cel = document.createElement("div");
      cel.textContent = number[i][y].toString();
      cel.classList.add("styleCel");
      row.appendChild(cel);
    }
    grid.appendChild(row);
  }

  return grid;
}

// function createGrid(): HTMLDivElement {
//   const grid = document.createElement("div");
//   grid.classList.add("styleGrid");
//   for (let i = 1; i < 10; i++) {
//     const row = document.createElement("div");
//     row.textContent = "";
//     row.classList.add("stylecontainerCel");

//     for (let y = 1; y < 10; y++) {
//       const cel = document.createElement("div");
//       // cel.textContent = "1";
//       // if (y == 1 && i == 5) {
//       //   cel.textContent = createNumber().toString();
//       // }
//       const tabResult = [];
//       tabResult.push(createNumber());
//       // console.log(tabResult);
//       cel.textContent = tabResult.toString();
//       cel.classList.add("styleCel");
//       row.appendChild(cel);
//     }

//     grid.appendChild(row);
//   }

//   return grid;
// }
