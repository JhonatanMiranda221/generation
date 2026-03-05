import leia from 'readline-sync'

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numero = leia.questionInt('Digite um numero: ');
let numeroEncontrado = false;

for(let contador = 0; contador < vetor.length; contador++){
    if(vetor[contador] == numero){
        console.log(`O número ${numero} está localizado na posição: ${contador}`);
        numeroEncontrado = true;
        break;
    }
}

if(!numeroEncontrado){
    console.log(`O numero ${numero} não foi encontrado!`);
}