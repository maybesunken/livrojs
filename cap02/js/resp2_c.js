// Cria referência ao form e aos elementos h3 e h4 (resposta)
const frm = document.querySelector("form")
const h3Produto = document.querySelector("#outProduto")
const h4Preco = document.querySelector("#outPreço")

// Cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nomeProduto = frm.inProduto.value // Obtém conteúdo do campo
    const valorPreco = Number(frm.inPreco.value)

    const valor = valorPreco * 2 + 0.50 * valorPreco
    const desconto = 0.50 * valorPreco // Calcula o valor do desconto
    h3Produto.innerText = `${nomeProduto} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}` // Exibe as respostas
    h4Preco.innerText = `O 3° produto custa apenas R$: ${desconto.toFixed(2)}`
    e.preventDefault() // Evita envio do formulário
})
