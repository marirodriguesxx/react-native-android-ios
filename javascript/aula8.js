class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = ''){
        super(sobrenome) //chama construtor da classe herdada
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva','programador')
    }
}

const filho = new Filho
console.log(filho)