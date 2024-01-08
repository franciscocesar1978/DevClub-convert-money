const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    console.log(data)
    

  
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const libra = data.GBPBRL.high
    const bitcoin = data.BTCBRL.high


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);


    if (currencySelect.value == "dolar") { //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolar);

    }

    if (currencySelect.value == "euro") { //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euro);
    }

    if (currencySelect.value == "libra") { //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libra);
    }

    if (currencySelect.value == "bitcoin") { //Se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoin);
    }

  

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }


    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues)