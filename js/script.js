{
    const calculateResult = (amout, currency) => {
        const rateEUR = 4.75;
        const rateUSD = 3.9;
        const rateCHF = 4.73;

        switch (currency) {
            case "EUR":
                return amout / rateEUR;
            case "USD":
                return amout / rateUSD;
            case "CHF":
                return amout / rateCHF;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
        
    }

    const onFormSubmit = (even) => {
        even.preventDefault();

        const amoutElement = document.querySelector(".js-amout");
        const currencyElement = document.querySelector(".js-currency");

        const amout = +amoutElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amout, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit",onFormSubmit);
    };

    init();

}