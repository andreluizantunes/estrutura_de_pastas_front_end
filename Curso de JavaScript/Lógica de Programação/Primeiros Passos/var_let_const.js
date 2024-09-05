/*var, let, e const

Exemplo com var

var permite declarar variáveis com escopo de função ou global. 
Variáveis declaradas com var podem ser redeclaradas e atualizadas.
 */


// Declara uma variável chamada 'nome' e atribui a ela a string "João".
// A palavra-chave 'var' é usada para declarar variáveis com escopo de função ou global, dependendo de onde a declaração ocorre.
// Variáveis declaradas com 'var' podem ser redeclaradas e atualizadas.
// Aqui, 'nome' é inicialmente definido como "João", que é um tipo de dado string usado para representar texto.
var nome = "João";   // Declaração de uma variável do tipo string

// Imprime o valor atual da variável 'nome' no console.
// Neste momento, 'nome' contém a string "João".
// A função 'console.log()' é usada para exibir o valor da variável no console, facilitando o
// debug e a visualização de dados durante o desenvolvimento.
console.log(nome);   // Saída: João

// Declara uma variável chamada 'idade' e atribui a ela o número 30.
// Variáveis do tipo número em JavaScript podem armazenar inteiros, números de ponto flutuante, e outros tipos numéricos.
// Aqui, 'idade' é atribuída o valor inteiro 30, demonstrando como números são representados e utilizados em JavaScript.
var idade = 30;      // Declaração de uma variável do tipo número

// Imprime o valor atual da variável 'idade' no console.
// 'idade' agora contém o número 30, que é exibido no console.
console.log(idade);  // Saída: 30

// Redeclara a variável 'nome', atualizando seu valor para "Maria".
// Em JavaScript, variáveis declaradas com 'var' podem ser redeclaradas no mesmo escopo.
// Essa redeclaração atualiza o valor de 'nome' de "João" para "Maria".
// Isso demonstra a flexibilidade e a dinâmica na manipulação de variáveis em JavaScript.
var nome = "Maria";  // Redeclarando a variável 'nome'

// Imprime o novo valor da variável 'nome' no console.
// Após a redeclaração, 'nome' agora contém a string "Maria", que substitui o valor anterior "João".
console.log(nome);   // Saída: Maria


// ---------------------------------------------------------------

/*Exemplo com let

let permite declarar variáveis com escopo de bloco, como dentro 
de loops ou instruções condicionais. Variáveis declaradas com let 
não podem ser redeclaradas no mesmo escopo, mas podem ser atualizadas.
*/

// Declaração de variável com 'let'
// A palavra-chave 'let' é usada para declarar variáveis com escopo de bloco,
// diferentemente de 'var', que declara variáveis com escopo global ou de função.
// Aqui, uma variável chamada 'idade_let' é declarada e inicializada com o valor 25.
// Este tipo de declaração permite que a variável seja atualizada, mas não redeclarada dentro do mesmo escopo.
let idade_let = 25;

// Imprime o valor da variável 'idade' no console.
console.log(idade_let); // Saída esperada: 25

// Atualização da variável
// Aqui, o valor da variável 'idade_let' é atualizado de 25 para 26.
// Isso demonstra uma característica importante das variáveis declaradas com
// 'let': elas podem ter seus valores atualizados após a declaração inicial.
idade_let = 26;

// Imprime o novo valor atualizado da variável 'idade_let' no console.
// Após a atualização da linha anterior, a variável agora contém o valor 26.
// Esta linha confirma que a atualização foi bem-sucedida, exibindo o novo valor da variável.
console.log(idade_let); // Saída: 26


// ----------------------------------------------------------


// Declaração de variável com 'const'
// A palavra-chave 'const' é usada para declarar variáveis cujo valor não deve mudar ao longo da execução do programa.
// Variáveis declaradas com 'const' têm escopo de bloco, similar às variáveis declaradas com 'let'.
// Aqui, uma variável chamada 'URL' é declarada e inicializada com a string "https://www.exemplo.com".
// Uma vez atribuído um valor a uma variável 'const', esse valor não pode ser alterado (a variável é considerada uma constante).
// Tentativas de reatribuir um valor a uma variável 'const' resultarão em um erro de tempo de execução.
const URL = "https://www.exemplo.com";

// Imprime o valor da variável 'URL' no console.
// Utiliza-se a função 'console.log()' para exibir o valor atual da variável 'URL'.
// Neste caso, o valor é a string "https://www.exemplo.com", que foi definida na declaração da variável.
// Isso demonstra como valores constantes podem ser utilizados para armazenar dados que não devem ser
// alterados, como URLs, chaves de configuração, entre outros.
console.log(URL); // Saída: https://www.exemplo.com


// Exemplo 2: Configuração de uma API

// Declaração de uma constante para a URL base de uma API
// 'const' é usado aqui porque a URL base da API não deve mudar durante a execução do aplicativo.
// Isso ajuda a prevenir erros que poderiam ocorrer se a URL fosse modificada acidentalmente.
const URL_BASE_API = "https://api.exemplo.com/v1";

// Declaração de uma constante para a chave de API
// A chave de API é um valor que também não deve mudar ao longo da execução do programa, garantindo uma autenticação consistente na API.
const CHAVE_API = "ABCDE12345FGHIJ";

// Exemplo de como essas constantes podem ser utilizadas
console.log("Conectando à API em:", URL_BASE_API);
console.log("Usando a chave de API:", CHAVE_API);


// Exemplo 3: Configurações de Aplicativo

// Declaração de constantes para configurações de um aplicativo
// 'const' é ideal para definir configurações estáticas, como o número máximo de usuários em uma sala de chat.
const MAX_USUARIOS_POR_SALA = 10;

// Declaração de uma constante para ativar ou desativar o modo de depuração
// Manter esse valor constante evita mudanças indesejadas no comportamento de depuração do aplicativo.
const MODO_DEBUG = false;

// Exemplo de como utilizar as constantes declaradas
console.log("Máximo de usuários por sala:", MAX_USUARIOS_POR_SALA);
console.log("Modo de depuração ativado:", MODO_DEBUG);

