//cria referência ao form e aos elementos de resposta (pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedicamento")
const resp2 = document.querySelector("#outPreco")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value           // obtém o conteúdo dos campos
    const preco = Number(frm.inPreco.value)

    //const promocao = (preco * 2)                // calcula o valor da promoção
    const desconto = Math.floor(preco * 2) 

    resp1.innerText = `Promoção de ${medicamento}`      // exibe as respostas 
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()                          //evita envio do form
})
     