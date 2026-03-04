import leia from 'readline-sync'

let nome;
let cargo;
let salario;
let novoSalario;



console.log("1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor")
console.log("4 - Motorista")
console.log("5 - Estoquista")
console.log("6 - Tecnico em TI")



nome = leia.question("Nome do colaborador: ");
cargo = leia.questionInt("Cargo do colaborador: ");
salario = leia.questionFloat("Salario do colaborador: ");

switch(cargo){
    case 1:
        novoSalario = salario + (0.10 * salario)
        console.log(`nome do colaborador: ${nome}`)
        console.log(`Cargo: Gerente`)
        console.log(`Novo Salário reajustado: R$ ${novoSalario.toFixed(2)}`)
        break
    case 2: 
        novoSalario = salario + (0.07 * salario)
        console.log(`nome do colaborador: ${nome}`)
        console.log(`Cargo: Vendedor`)
        console.log(`Novo Salário reajustado: R$ ${novoSalario.toFixed(2)}`)
        break
    
    case 3:
        novoSalario = salario + (0.09 * salario)
        console.log(`nome do colaborador: ${nome}`)
        console.log(`Cargo: Supervisor`)
        console.log(`Novo Salário reajustado: R$ ${novoSalario.toFixed(2)}`)
        break
    
    case 4:
        novoSalario = salario + (0.06 * salario)
        console.log(`nome do colaborador: ${nome}`)
        console.log(`Cargo: Motorista`)
        console.log(`Novo Salário reajustado: R$ ${novoSalario.toFixed(2)}`)
        break

    case 5:
        novoSalario = salario + (0.05 * salario)
        console.log(`nome do colaborador: ${nome}`)
        console.log(`Cargo: Estoquista`)
        console.log(`Novo Salário reajustado: R$ ${novoSalario.toFixed(2)}`)
        break
    case 6:
        novoSalario = salario + (0.08 * salario)
        console.log(`nome do colaborador: ${nome}`)
        console.log(`Cargo: Tecnico em TI`)
        console.log(`Novo Salário reajustado: R$ ${novoSalario.toFixed(2)}`)
        break
    default:
        console.log("Cargo invalido")
        break

}
