// imprime na tela (equivale ao printf)
console.log('Meu primeiro programa js :)')
// variasveis em js
// var sao variaveis hoisting - ou seja - movidas para o topo da pilha de execucao daquela funcao
// logo, mesmo s usarmos uma variavel antes de declara-la, ira funcionar
//variaveis var sao automaticamente inicializadas com o valor undefined, caso nao seja atribuido valor em sua declaracao 
var a = 3 //variavel a recebe o valor 3 (qual o tipo de var?????)
let b = 4 //(qual a diferenca entre var e let???)
// let é uma forma de garantir escobo de variavel
console.log('Primeira atribuicao')
console.log('a =',a,',b =',b)
var a = 30
b = 40
console.log('Segunda atribuicao')
console.log('a =',a,',b =',b)

// funcoes e objetos
const Cliente = function () {}
console.log(typeof Cliente)
console.log(typeof new Cliente())

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())

