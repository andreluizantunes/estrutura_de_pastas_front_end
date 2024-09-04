/*Exercício 1: Verificação de idade

Escreva um programa que pede ao usuário sua idade e 
verifica se ele é maior ou igual a 18 anos. Se for, 
exiba "Você é maior de idade", caso

 contrário, exiba "Você é menor de idade".*/

// Primeiro, importamos o módulo 'readline', que é uma interface para 
// ler dados da entrada padrão (stdin) e escrever na saída padrão (stdout) em aplicações Node.js.
// Esse módulo é útil para criar um programa interativo que lê entrada do usuário.
const readline = require('readline');

// Aqui, criamos uma interface usando 'readline.createInterface'. Esta interface nos permite interagir com o usuário.
// Especificamos 'process.stdin' como a entrada (input), o que significa que leremos dados que o usuário digita no terminal.
// Especificamos 'process.stdout' como a saída (output), o que significa que mostraremos dados ou mensagens ao usuário no terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Usamos o método 'question' da interface 'rl' para fazer uma pergunta ao usuário.
// A pergunta é "Por favor, insira sua idade: ", e esperamos que o usuário digite sua idade e pressione Enter.
// Quando o usuário responde, a resposta é passada como argumento para a função callback (a função dentro dos parênteses seguintes).
rl.question('Por favor, insira sua idade: ', (idade) => {

    // Dentro da função callback, convertemos a resposta do usuário, que é recebida como uma string, para um número.
    // Usamos 'parseInt' para essa conversão, permitindo-nos trabalhar com a idade como um valor numérico.
    const idadeNumerica = parseInt(idade);

    // Aqui, verificamos se a idade numérica convertida é maior ou igual a 18.
    // Se for verdade, usamos 'console.log' para imprimir "Você é maior de idade".
    // Isso indica que o usuário atingiu a maioridade.
    if (idadeNumerica >= 18) {

        console.log('Você é maior de idade');

    // Se a idade numérica for menor que 18, o código dentro do 'else' é executado.
    // Imprimimos "Você é menor de idade", indicando que o usuário ainda não atingiu a maioridade.
    } else {

        console.log('Você é menor de idade');
        
    }

    // Após processar a resposta do usuário, chamamos 'rl.close()' para fechar a interface 'rl'.
    // Isso é necessário para terminar o programa, pois a interface mantém o processo Node.js aberto enquanto espera por entrada.
    rl.close();
});