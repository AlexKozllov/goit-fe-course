"use strict";

const chinaPrise = 100;
const chilePrise = 250;
const australiaPrise = 170;
const indiaPrise = 80;
const jamaicaPrise = 120;

let countryInput = prompt("Введите название страны");
countryInput = countryInput.toLowerCase();
switch (countryInput) {
  //   case countryInput == chinaName:
  case "китай":
    countryInput = "Китай";
    console.log(
      `Доставка в ${countryInput} будет стоить ${chinaPrise} кредитов`
    );
    break;
  case "чили":
    countryInput = "Чили";
    console.log(
      `Доставка в ${countryInput} будет стоить ${chilePrise} кредитов`
    );
    break;
  case "австралия":
    countryInput = "Австралию";
    console.log(
      `Доставка в ${countryInput} будет стоить ${australiaPrise} кредитов`
    );
    break;
  case "индия":
    countryInput = "Индию";
    console.log(
      `Доставка в ${countryInput} будет стоить ${indiaPrise} кредитов`
    );
    break;
  case "ямайка":
    countryInput = "Ямайку";
    console.log(
      `Доставка в ${countryInput} будет стоить ${jamaicaPrise} кредитов`
    );
    break;
  default:
    alert("В вашей стране доставка не доступна");
}
