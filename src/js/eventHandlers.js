import { inputPln, inputUsd, convertBtn } from "./domElements.js";
import { convertation, getFromLocalStorage } from "./api.js";

export const setupEventListeners = () => {
  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Backspace":
        inputPln.value = inputPln.value.slice(0, -1);
        break;
      case "Enter":
        convertation();
        break;
      case "Escape":
        inputPln.value = "";
        inputUsd.value = "";
        break;
      default:
        if (!isNaN(event.key)) {
          event.preventDefault();
          inputPln.value += event.key;
        }
        break;
    }
  });

  convertBtn.addEventListener("click", () => {
    const today = new Date().toISOString().split("T")[0];
    const storedData = JSON.parse(localStorage.getItem("exchangeRate"));

    if (
      !storedData ||
      !storedData.addedDate ||
      today !== storedData.addedDate
    ) {
      convertation();
    } else {
      getFromLocalStorage("exchangeRate");
    }
  });
};
