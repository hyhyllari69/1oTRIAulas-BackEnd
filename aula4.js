// Condições 
// Se ... senão
// If ... else
const idade = 18
if(idade < 18) {
console.log("Você não pode tirar a CNH, não há 18 anos completos")
} else {
    console.log("Você pode tirar a CNH, pague a taxa!")
}


const possuiCNH = false
if (idade >= 18 && possuiCHN == true){
    console.log("Tudo certo, você pode dirigir!")
}

// Operadores lógicos:
// && -> E
// || -> OU

/* TABELA VERDADE:

 Para operador E:    |    operador OU:
V V = V             |   V V = V
V F = F             |   V F = V
F V = F             |   F V = V
F F = F             |   F F = F
*/