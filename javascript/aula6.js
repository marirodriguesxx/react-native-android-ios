//funcoes anonimas - sao funcoes sem nome :p
const soma = function (x,y) {
    return x + y
}

const imprime = function (a,b,operacao = soma) {
    console.log(operacao(a,b))
}

imprime(3,4)

imprime(3,4,soma)

imprime(3,4,function(x,y) {return x - y})

//usando arrow function
imprime(3,4,(x,y) => x*y)

// funcao anonima dentro de um objeto

const pessoa = {
    falar: function() {
        console.log('opa')
    }
}

pessoa.falar()