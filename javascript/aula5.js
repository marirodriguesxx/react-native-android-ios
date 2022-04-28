let dobro = function(a) {
    return 2*a
}

dobro = (a) => {
    return 2*a
}

//quando temos apenas um unico parametro
dobro = a => 2*a //return implicito

console.log(dobro(Math.PI))

let ola = function() {
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola'
console.log(ola())

function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa