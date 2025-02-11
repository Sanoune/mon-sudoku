import "../style.css";

export function startGame(mainContainer: HTMLDivElement) {
  mainContainer.appendChild(creation());
  // mainContainer.appendChild(createGrid());
}
// randome tableau chiffre
// tableau vide
// tableau avec chiffre choisi
// tableau -chiffre choisi (tableau possibilité - chiffre selectionné)
// functions regles sudoku
//verification ligne
function checkRow() {
  let number = creatTabDeux();
  for (let i = 0; i < number.length; i++) {
    for (let y = 0; y < number[i].length; y++) {}
  }
  return;
}
checkRow();
// creation tableau 2D
function creatTabDeux() {
  let GrandTab: (number | null)[][] = [];
  for (let i = 0; i < 9; i++) {
    let tabNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let petitTab: (number | null)[] = [];
    for (let y = 0; y < 9; y++) {
      let index = Math.floor(Math.random() * tabNumber.length);
      let numberAlternatif = tabNumber[index];
      tabNumber.splice(index, 1);
      petitTab.push(numberAlternatif);
    }
    GrandTab.push(petitTab);
  }
  return GrandTab;
}

function createTableau() {
  let GrandTab: (number | null)[][] = [];
  for (let x = 0; x < 9; x++) {
    let petitTab: (number | null)[] = [];
    for (let y = 0; y < 9; y++) {
      petitTab.push(null);
    }
    GrandTab.push(petitTab);
  }
  return GrandTab;
}

function fillTableau() {
  const tableau = createTableau();
  for (let x = 0; x < tableau.length; x++) {
    for (let y = 0; y < tableau[x].length; y++) {
      tableau[x][y] = chooseCellValue(x, y, tableau);
    }
  }
}

const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function chooseCellValue(x: number, y: number, tableau: (number | null)[][]) {
  const lines = lineValues(x, tableau);
  const column = columnValues(y, tableau);
  return 1;
}

function lineValues(x: number, tableau: (number | null)[][]) {
  return [];
}

function columnValues(y: number, tableau: (number | null)[][]) {
  return [];
}

function chooseRandom(impossibleValues: number[]) {
  possibleValues;
  let index = Math.floor(Math.random() * tabNumber.length);
}

const nouveaTab = creatTabDeux();
console.log(nouveaTab);
// creation grid visuel
function creation(): HTMLDivElement {
  let number = nouveaTab;
  const grid = document.createElement("div");
  grid.classList.add("cssGrid");
  for (let i = 0; i < number.length; i++) {
    const row = document.createElement("div");
    row.textContent = number[i]?.toString() || "";
    row.classList.add("stylecontainerCel");
    for (let y = 0; y < number[i].length; y++) {
      const cel = document.createElement("div");
      cel.textContent = number[i][y]?.toString() || "";
      cel.classList.add("styleCel");
      row.appendChild(cel);
    }
    grid.appendChild(row);
  }

  return grid;
}
