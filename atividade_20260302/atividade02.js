const leia = require('readline-sync')
let nota1;
let nota2;
let nota3;
let nota4;


nota1 = leia.questionFloat("Digite a nota 1: ")
console.log(`A nota 1 é ${nota1}`)
nota2 = leia.questionFloat("Digite a nota 2: ")
console.log(`A nota 2 é ${nota2}`)
nota3 = leia.questionFloat("Digite a nota 3: ")
console.log(`A nota 3 é ${nota3}`)
nota4 = leia.questionFloat("Digite a nota 4: ")
console.log(`A nota 4 é ${nota4}`) 

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`A média final é ${media}`)    