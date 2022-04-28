const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//operador destruction
console.log('com o operador desctruction')
const {nome, idade} = pessoa
const {endereco:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)
console.log(nome,idade)
// pela forma acima, os valores nome e idade estao sempre atrelados um ao outros
// a forma abaixo resolve esse problema
const {nome:n, idade:i} = pessoa
console.log(n)
console.log(i)

//sem o operador desctruction
console.log('sem o operador desctruction')
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco.logradouro)

// funcoe com destruction
function rand ({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))