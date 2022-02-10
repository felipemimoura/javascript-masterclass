//Utilização da variavel antes de sua atribuição
console.log(pi)
//Declaração junto a atribuiçao
var pi = 3.141492
console.log(pi)
// Atribuindo um novo valor
pi = 3
console.log(pi)

// Redeclaracão da variável e reatribuição da variável
var pi = 3
console.log(pi)

// Acessando o valor fora do escopo
if(true){
    var idade = 10
}
console.log(idade)