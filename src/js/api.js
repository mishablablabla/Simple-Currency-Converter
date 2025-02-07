import { inputPln, inputUsd, dbUrl } from "./domElements.js";

export async function convertation() {
  inputUsd.value = "Загрузка...";

  try {
    const response = await fetch(dbUrl);

    if (!response.ok) {
      console.log(`Ошибка: ${response.status}`);
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    const currencyValue = data.rates.PLN;
    const plnValue = parseFloat(inputPln.value);

    localStorage.setItem(
      "exchangeRate",
      JSON.stringify({
        PLN: currencyValue,
        addedDate: data.date,
      })
    );
    if (isNaN(plnValue)) {
      inputUsd.value = "Введите корректное число";
    } else {
      inputUsd.value = (plnValue / currencyValue).toFixed(2);
    }
  } catch (error) {
    console.error(error);
    inputUsd.value = "Ошибка сервера";
  }
}

export function getFromLocalStorage(itemKey) {
  const data = JSON.parse(localStorage.getItem(itemKey)),
    plnValue = parseFloat(inputPln.value),
    currencyValue = data.PLN;

  if (isNaN(plnValue)) {
    inputUsd.value = "Введите корректное число";
  } else {
    inputUsd.value = (plnValue / currencyValue).toFixed(2);
  }
}
