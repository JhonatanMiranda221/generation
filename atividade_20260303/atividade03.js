import leia from 'readline-sync'

let codigo;
let quantidade;
let total;
let produto;

console.log("1 - Cachorro Quente = R$ 10.00")
console.log("2 - X-Salada = R$ 15.00")
console.log("3 - X-Bacon = R$ 18.00")
console.log("4 - Bauru = R$ 12.00")
console.log("5 - Refrigerante = R$ 8.00")
console.log("6 - Suco de Laranja = R$ 13.00")

codigo = leia.questionInt("Digite o codigo do produto:")
quantidade = leia.questionInt("Digite a quantidade:")

switch (codigo) {
    case 1:
        total = quantidade * 10.00
        console.log("Você comprou Cachorro Quente")
        break
    case 2:
        total = quantidade * 15.00
         console.log("Você comprou x-salada")
        break
    case 3: 
        total = quantidade * 18.00
        console.log("Você comprou x-bacon")
        break
    case 4:
        total = quantidade * 12.00
        console.log("Você comprou Bauru")
        break
    case 5:
        total = quantidade * 8.00
        console.log("Você comprou Refrigerante")    
        break
    case 6:
        total = quantidade * 13.00
        console.log("Você comprou Suco de Laranja")
        break
    default:
        console.log("Codigo invalido")

} 
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`)
