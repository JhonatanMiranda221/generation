const leia = require('readline-sync')

let salario;
let abono;


salario = leia.questionFloat("Digite o seu salario: ")
console.log(`Seu salario é ${salario}`)

abono = leia.questionFloat("Digite o seu abono: ")
console.log(`Seu abono é ${abono}`)

novoSalario = (salario + abono)

console.log (`O seu novo salario é ${novoSalario}`)
