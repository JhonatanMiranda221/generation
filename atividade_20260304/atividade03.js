import leia from 'readline-sync'

let numero = leia.questionInt('Digite um numero: ');
let soma = 0;

do{
    if (numero > 0){
        soma = soma + numero;
    }

    numero = leia.questionInt('Digite um numero: ');
}
while(numero != 0);

console.log(`A soma dos números positivos é: ${soma}`)