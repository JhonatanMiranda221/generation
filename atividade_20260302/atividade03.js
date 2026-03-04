const leia = require('readline-sync')

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;

salarioBruto = leia.questionFloat("Digite o seu salario bruto: ");
console.log (`Seu salario bruto é ${salarioBruto}`)

adicionalNoturno = leia.questionFloat("Digite o seu adicional noturno: ");
console.log (`Seu adicional noturno é ${adicionalNoturno}`)

horasExtras = leia.questionFloat("Digite as horas extras: ");
console.log (`As horas extras são ${horasExtras}`)

descontos = leia.questionFloat("Digite os descontos: ");
console.log (`Os descontos são ${descontos}`)

let salarioLiquido = salarioBruto + adicionalNoturno + horasExtras - descontos;
console.log (`Seu salario liquido é ${salarioLiquido}`)
