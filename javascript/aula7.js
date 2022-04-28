class Lancamento {
    constructor(nome = '', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class Ciclo {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(... lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumarios() {
        let valorConsolidado = 0
        this.lancamentos.forEach (
            l =>{
                valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('SALARIO',45000)
const luz = new Lancamento('LUZ', -220)

const contas = new Ciclo(6,2018)
contas.addLancamentos(salario,luz)

console.log(contas.sumarios())