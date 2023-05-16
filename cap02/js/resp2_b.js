//Cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const minuto = document.querySelector("#outMinuto")
const tempodeuso = document.querySelector("#outTempodeuso")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const valorMinuto = Number(frm.inMinuto.value)                             // obtém conteúdo dos campos
    const tempodeuso = Number(frm.inTempodeuso.value)

    const valor = Math.ceil (tempodeuso / 15) * valorMinuto               //calcula o valor a ser pago                       
    minuto.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`           // exibe as respostas                       

    e.preventDefault()                                             //evita envio do form    
}) 