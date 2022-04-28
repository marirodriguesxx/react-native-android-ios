const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)
pilotos.push('Verstappen') //adiciona um elemento ao final do array
console.log(pilotos)
pilotos.shift() //remove o primeiro elemento da lista
console.log(pilotos)
pilotos.unshift('Hamilton') //adiciona um elemento ao inicio do array
console.log(pilotos)

// utilizando o splice
pilotos.splice(2,0,'Bottas','Massa') //adiciona na posicao dois mas nao remove nenhum
console.log(pilotos)
pilotos.splice(3,1) //removendo Massa
console.log(pilotos)

//utilizando o slice
const algunsPilotos1 = pilotos.slice(2) //gera um novo array a partir do indice 2 do array pilotos
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)