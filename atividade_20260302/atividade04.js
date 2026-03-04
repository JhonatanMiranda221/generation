const leia = require('readline-sync')

let numero1;
let numero2;
let numero3;
let numero4;

numero1 = leia.questionInt("Digite o primeiro numero: ")
console.log(`O primeiro numero é ${numero1}`)
numero2 = leia.questionInt("Digite o segundo numero: ")
console.log(`O segundo numero é ${numero2}`)
numero3 = leia.questionInt("Digite o terceiro numero: ")
console.log(`O terceiro numero é ${numero3}`)
numero4 = leia.questionInt("Digite o quarto numero: ")
console.log(`O quarto numero é ${numero4}`)

let calculo = (numero1*numero2) - (numero3*numero4);
console.log(`O calculo é ${calculo}`)