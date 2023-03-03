let formElement = document.querySelector(".js-form");
let amoutElement = document.querySelector(".js-amout");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


    let rateEUR = 4.75;
    let rateUSD = 3.9;
    let rateCHF = 4.73; 

formElement.addEventListener("submit", (even) => {
    even.preventDefault();

    let amout = +amoutElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amout / rateEUR;
            break;
        case "USD":
            result = amout / rateUSD;
            break;
        case "CHF":
            result = amout / rateCHF;
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});






