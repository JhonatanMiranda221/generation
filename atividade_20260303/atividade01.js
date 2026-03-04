import leia from 'readline-sync'

let numero1;
let numero2;
let numero3;

numero1 = leia.questionFloat('Digite o primeiro numero: ')
numero2 = leia.questionFloat('Digite o segundo numero: ')
numero3 = leia.questionFloat('Digite o terceiro numero: ')

if (numero1 + numero2 > numero3){
    console.log("A Soma de A + B é Maior do que C")
}
else if (numero1 + numero2 == numero3){
    console.log("A Soma de A + B é Igual a C")
}
else {
    console.log("A A Soma de A + B é Menor do que C")
}

