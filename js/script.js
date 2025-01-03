document.addEventListener("DOMContentLoaded", () => {
  const inputPln = document.querySelector("#pln");
  const inputUsd = document.querySelector("#usd");
  const convertBtn = document.querySelector("#convert");

  window.addEventListener("keydown", (event) => {
    event.preventDefault();

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
          inputPln.value += event.key;
        }
        break;
    }
  });

  convertBtn.addEventListener("click", convertation);

  function convertation() {
    inputUsd.value = "Загрузка...";

    fetch("../js/current.json")
      .then((response) => {
        if (!response.ok) {
          console.log(`Ошибка: ${response.status}`);
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const validCurrent = data.current.usd;

        const plnValue = parseFloat(inputPln.value);
        if (isNaN(plnValue)) {
          inputUsd.value = "Введите корректное число";
        } else {
          inputUsd.value = (plnValue / validCurrent).toFixed(2);
        }
      })
      .catch(() => {
        inputUsd.value = "Ошибка сервера";
      });
  }
});
