//Exercicios Aula 1 - Font: https://github.com/NathanCarlos/devschool-node/blob/main/hello-world.md

/*  1- Crie um arquivo chamado hello-world.js e faça com que quando esse arquivo seja executado pelo node, seja exibido no console o texto "Meu primeiro arquivo javascript no node!";
    2- Neste mesmo arquivo, adicione um código para que seja exibido no console o resultado da soma de 2 + 2. */


console.log("Meu primeiro arquivo javascript no node.")

const num1 = 2;
const num2 = 2;

const soma = () => {
    return num1 + num2;
}
console.log ("A soma de " + num1 + " mais " + num2 + " é igual a " + soma() + ".");