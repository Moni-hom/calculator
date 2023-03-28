{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.75;
        const rateUSD = 3.9;
        const rateCHF = 4.73;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
            case "USD":
                return amount / rateUSD;
            case "CHF":
                return amount / rateCHF;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
        
    }

    const onFormSubmit = (even) => {
        even.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}