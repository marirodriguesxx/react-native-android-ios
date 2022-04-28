const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice,array){
    console.log(`${indice +1}) ${nome}`)
    console.log(array)
})

/*let i = 1
aprovados.forEach(nome =>console.log(`${i ++}) ${nome}`))*/

Array.prototype.forEach2 = function(callback) {
    for(let i=0; i<this.length; i++) {
        callback(this[i],i,this)
    }
}

aprovados.forEach(function(nome, indice,array){
    console.log(`${indice +1}) ${nome}`)
})

