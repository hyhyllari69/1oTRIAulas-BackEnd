// LISTAS
// índice: sempre indica em 0
//                  0        1             2
let esportes = ["futsal", "volei","tênis de mesa"]
let taxaInscricao = [10 , 12 , 5 ]
let contador = 0 // variável incial do laço
while(contador < esportes.length){  //condição de parada
    console.log(esportes[contador] + "-R$" +
        taxaInscricao[contador])
    contador = contador + 1
}

// adiciona no final 
esportes.push("xadrez")
taxaInscricao.push(10)
console.log(esportes)

//remover um item especifico e adicionar
// remove a partir do indice 1, 1 elemento, e adiciona queimada
esportes.splice(1, 1, "queimada")
console.log(esportes)