/*1. Number

Representa tanto números inteiros quanto de ponto flutuante.
*/

// 1. Number
// Declara uma variável chamada 'idade' e atribui a ela o valor inteiro 30.
// A palavra-chave 'let' é usada para declarar variáveis com escopo de bloco, o que
// significa que a variável existe apenas dentro do bloco em que foi definida.
// Variáveis declaradas com 'let' podem ter seus valores alterados posteriormente.
let idade = 30;

// Declara uma variável chamada 'preco' e atribui a ela o valor de ponto flutuante 99.99.
// Valores de ponto flutuante são usados para representar números decimais ou números que requerem maior precisão.
let preco = 99.99;

// Imprime no console uma string seguida pelo valor da variável 'idade'.
// A função 'console.log()' é usada para exibir mensagens ou valores no console do navegador ou do ambiente de execução do JavaScript.
// Neste caso, a mensagem "Número (inteiro):" é seguida pelo valor da variável 'idade', ilustrando que 'idade' é um número inteiro.
console.log("Número (inteiro):", idade);

// Imprime no console uma string seguida pelo valor da variável 'preco'.
// Semelhante ao comando anterior, esta linha utiliza 'console.log()' para exibir "Número (ponto flutuante):"
// seguido pelo valor de 'preco',
// demonstrando que 'preco' é um número de ponto flutuante.
console.log("Número (ponto flutuante):", preco);




/*2. String

Representa sequências de caracteres ou textos.
*/

// 2. String
// Declara uma variável chamada 'nome' e atribui a ela a string "João".
// 'let' é utilizado para definir variáveis com escopo de bloco, o que significa que
// a variável só existe dentro do bloco onde foi declarada.
// As strings são usadas para armazenar e manipular texto. Elas são definidas usando aspas simples ('') ou duplas ("").
let nome = "João";

// Declara uma variável chamada 'saudacao' e atribui a ela a string "Olá, mundo!".
// Esta é outra utilização de uma string, neste caso, uma saudação comum em programas de introdução à programação.
let saudacao = "Olá, mundo!";

// Utiliza a função 'console.log()' para imprimir no console a string "String:" seguida pelo valor da variável 'nome'.
// A função 'console.log()' é amplamente usada para exibir mensagens no console,
// facilitando o debug e o acompanhamento dos valores das variáveis durante a execução do código.
// Aqui, ela demonstra o uso de 'nome', confirmando que seu tipo é uma string.
console.log("String:", nome);

// Utiliza a função 'console.log()' para imprimir no console a string "String:" seguida pelo valor da variável 'saudacao'.
// Semelhante ao comando anterior, esta linha imprime a mensagem "String:" para indicar o
// tipo de dado sendo exibido, seguido pelo conteúdo da variável 'saudacao'.
// Esta abordagem é útil para verificar o conteúdo de variáveis de texto durante o desenvolvimento.
console.log("String:", saudacao);


/*3. Boolean

Representa valores verdadeiros (true) ou falsos (false).
*/

// 3. Boolean
// Declara uma variável chamada 'estaLogado' e atribui a ela o valor booleano 'true'.
// Variáveis booleanas podem armazenar apenas dois valores: true (verdadeiro) ou false (falso).
// A palavra-chave 'let' é utilizada para declarar variáveis com escopo de bloco,
// o que significa que a variável existe apenas dentro do bloco onde foi definida.
// O valor 'true' indica que a condição ou estado representado pela variável é
// verdadeiro, nesse caso, que o usuário está logado.
let estaLogado = true;

// Declara uma variável chamada 'maiorDeIdade' e atribui a ela o valor booleano 'false'.
// Aqui, 'false' representa que a afirmação ou condição descrita pela
// variável é falsa, ou seja, o indivíduo não é maior de idade.
let maiorDeIdade = false;

// Utiliza a função 'console.log()' para imprimir no console a string
// "Boolean (verdadeiro):" seguida pelo valor da variável 'estaLogado'.
// Isso demonstra o uso de 'console.log()' para exibir valores de variáveis
// no console, facilitando a depuração e o monitoramento do estado do programa.
// A mensagem indica explicitamente que o valor da variável 'estaLogado' é um booleano que, neste caso, é verdadeiro.
console.log("Boolean (verdadeiro):", estaLogado);

// Utiliza a função 'console.log()' para imprimir no console a string
// "Boolean (falso):" seguida pelo valor da variável 'maiorDeIdade'.
// Assim como na linha anterior, esta instrução exibe o valor da variável
// 'maiorDeIdade' no console, destacando que seu tipo é booleano e, neste contexto, é falso.
console.log("Boolean (falso):", maiorDeIdade);


/*4. Undefined

Indica uma variável que foi declarada mas não teve um valor atribuído, ou seja, não foi inicializada.
*/
// 4. Undefined
// 'endereco' é declarada sem um valor inicial, o que automaticamente a atribui o valor 'undefined'.
// O tipo 'undefined' é usado em JavaScript para indicar que uma variável foi declarada mas ainda não teve um valor atribuído a ela.
let endereco;

// Imprime no console o tipo e o valor de 'endereco', que é 'undefined', indicando que a variável ainda não possui um valor definido.
console.log("Undefined:", endereco);


/*5. Null

Representa a ausência intencional de um valor de objeto.
*/

// 5. Null
// 'salario' é declarada com o valor 'null'.
// O valor 'null' é usado para representar a ausência intencional de qualquer
// valor de objeto, indicando que a variável está intencionalmente vazia no momento.
let salario = null;

// Imprime no console o tipo e o valor de 'salario', que é 'null', demonstrando a ausência intencional de valor.
console.log("Null:", salario);

/*6. Symbol

Usado para criar propriedades únicas de objetos. Symbols são sempre únicos, mesmo que tenham a mesma descrição.
*/

// 6. Symbol
// 'id' é declarada como um 'Symbol' com a descrição "id".
// 'Symbol' é um tipo de dados único e imutável usado para criar identificadores únicos para propriedades de objetos.
// Cada Symbol é único, mesmo que dois Symbols tenham a mesma descrição.
let id = Symbol("id");

// Imprime no console o tipo e o valor de 'id'. Como 'Symbol' não pode ser convertido diretamente para string
// para ser impresso, usamos 'id.toString()' para obter sua descrição como string.
console.log("Symbol:", id.toString());

/*7. BigInt

Representa números inteiros muito grandes que não podem ser representados pelo tipo Number.
*/

// 7. BigInt
// 'numeroGrande' é declarado como um 'BigInt'.
// 'BigInt' é um tipo de dados que permite representar números inteiros maiores do que o limite
// seguro para o tipo 'Number' em JavaScript.
// Números do tipo 'BigInt' são escritos com um 'n' no final para diferenciá-los dos números do tipo 'Number'.
let numeroGrande = 1234567890123456789012345678901234567890n;

// Imprime no console o tipo e o valor de 'numeroGrande', mostrando que é possível trabalhar com números inteiros muito grandes.
console.log("BigInt:", numeroGrande);
