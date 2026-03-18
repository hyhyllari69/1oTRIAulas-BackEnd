// JSON: JavaScript Object Notation
// É uma notação para traduzir objetos JavaScript em texto
const alunos=[
    {
        nome: "Hyllari",
        dataNasc: "24/07/2007",
        turma: "3DSC"
    },
    {
        nome: "Gustavo",
        dataNasc: "07/04/2003",
        turma: "3DSB"
    },
    {
        nome: "Ranzani",
        dataNasc: "11/03/2006",
        turma: "3DSA"
    }
]

const alunosJSON = JSON.stringify(alunos)
console.log(alunos)
console.log(alunosJSON)

const alunosOBJ = JSON.parse(alunosJSON)
console.log(alunosOBJ)

function criaArquivos(obj){
    const dadosJSON = JSON.stringify(obj)
    const fs = require("fs")
    fs.writeFileSync("alunos.json", dadosJSON)
}
criaArquivos(alunos)

// Lendo um arquivo JSON
const arquivo = require("./alunos.json")
console.log(arquivo)