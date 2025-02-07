import { startGame } from "./components/logique";
import "./style.css";

const mainDiv = document.querySelector<HTMLDivElement>("#app");
if (!mainDiv) {
  console.error("Une div avec id app doit etre présente.");
} else {
  startGame(mainDiv);
}
