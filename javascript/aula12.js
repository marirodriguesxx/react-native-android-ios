//funcao map, praticamente copia um array para outro com algumas operacoes
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return e*2
})
const money = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
resultado = resultado.map(money)
console.log(nums,resultado)

//funcao filter, filtra elementos de um array
const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

const caro = produtos => produtos.preco >=500
const fragil = produtos => produtos.fragil
let frageis = produtos.filter( fragil) 
let naoFrageis = produtos.filter( function(p) { return p.fragil == false } )
console.log('frageis:',frageis)
console.log('nao frageis:',naoFrageis)

console.log(produtos.filter(caro).filter(fragil))