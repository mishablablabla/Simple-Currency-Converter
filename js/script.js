document.addEventListener("DOMContentLoaded", () => {
  const inputPln = document.querySelector("#pln");
  const inputUsd = document.querySelector("#usd");
  const convertBtn = document.querySelector("#convert");

  convertBtn.addEventListener("click", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      if (request.status === 200) {
        try {
          const data = JSON.parse(request.response);
          const usdRate = data.current.usd;

          const plnValue = parseFloat(inputPln.value);
          if (isNaN(plnValue)) {
            inputUsd.value = "Введите корректное число";
          } else {
            inputUsd.value = (plnValue / usdRate).toFixed(2);
          }
        } catch (error) {
          inputUsd.value = "Ошибка обработки данных";
        }
      } else {
        inputUsd.value = "Ошибка сервера";
      }
    });
  });
});
