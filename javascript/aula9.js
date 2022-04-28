let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados)

//as posicoes entre abia e rafael serao undefined
aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.sort())

delete aprovados [1] //nao reordena os elementos restantes, apenas atribui undefined aquela posicao

console.log(aprovados)
//adiciona e remove elementos - splice
aprovados.splice(1,1,'Josefa') //comeca a partir do indice 1 e exclui 1 elemento e adiciona um novo
console.log(aprovados)

aprovados.splice(6,4) //comeca a partir do indice 6 e exclui 4 elementos
console.log(aprovados)

//observamos que aprovados tem 6 elementos
console.log(aprovados.length)
//vamos, novamente, adicionar em uma posicao maior que a ultima, como por exemplo, 10
//mas, utilizando o splice
aprovados.splice(9,0,'novo nome')
console.log(aprovados)
console.log(aprovados[6])
//nota-se que em splice adiciona-se sempre ao final do vetor, sem criar valores undefined



