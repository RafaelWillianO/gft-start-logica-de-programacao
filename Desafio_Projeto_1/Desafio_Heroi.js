// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"



let nomeHeroi = "RafaWill"
let totalExp = 1000
const texto1 = "O Herói de nome "
const texto2 = " está no nível de "


if (totalExp < 1001) {
    console.log(texto1 + nomeHeroi + texto2 + "Ferro")
} else if (totalExp <= 2000) {
    console.log(texto1 + nomeHeroi + texto2 + "Bronze")
} else if (totalExp <= 5000) {
    console.log(texto1 + nomeHeroi + texto2 + "Prata")
} else if (totalExp <= 7000) {
    console.log(texto1 + nomeHeroi + texto2 + "Ouro")
} else if (totalExp <= 8000) {
    console.log(texto1 + nomeHeroi + texto2 + "Platina")
} else if (totalExp <= 9000) {
    console.log(texto1 + nomeHeroi + texto2 + "Ascendente")
} else if (totalExp < 10000) {
    console.log(texto1 + nomeHeroi + texto2 + "Imortal")
} else if (totalExp >= 10001) {
    console.log(texto1 + nomeHeroi + texto2 + "Radiante")
} else {
    console.log(texto1 + nomeHeroi + texto2 + "Level não identificado")
}