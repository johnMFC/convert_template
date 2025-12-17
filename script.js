//Cotação de moeda do dia 
const USD = 5.46
const EUR = 6.42
const GBP = 7.24

//Obtendo os formulários

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


//Manipulando o input amount para receber somente números
  amount.addEventListener("input" , () => {
  const  hasCharacterHegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterHegex , "")
})
//Capturando o evento de submit do formulário
form.onsubmit =  (event) => {
  event.preventDefault()
  
  switch (currency.value){
    case "USD":
      convertCurrency(amount.value,USD,"US$")
      break
      case "EUR":
        convertCurrency(amount.value,EUR,"€")
        break
        case "GBP":
          convertCurrency(amount.value,GBP,"£")
        break
  }
}

//Função para converter a moeda

function convertCurrency(amount,price,symbol){
  try{ 
  //Atualizando o conteúdo
  description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`
  
  let total = amount * price
  /*if(isNaN){
    return alert("Por favor, digite o valor corretament para converter")
  }*/
  total = formatCurrencyBRL(total).replace("R$", "")
  //exibe o resultado total 
  result.textContent = `${total} Reais`

  
    //.show-result aplica a classe do footer
  footer.classList.add("show-result")
  }catch (error){
    footer.classList.remove("show-result")
     console.log("Não foi possível converter. Tente novamente mais tarde")
  }
}
//formata a moeda em real brasileiro
function formatCurrencyBRL(value){
//formata o número de acordo com as regras de localização
  return Number(value).toLocaleString("pt-BR", {
    //currency informa que o número deve ser em formato de moeda
    style: "currency",
    //específica que é real Brasileiro 
    currency: "BRL"
  })
}





