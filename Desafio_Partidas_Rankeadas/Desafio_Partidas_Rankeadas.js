
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
    depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo(vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"



function pdl(wins, loses) {
    return wins - loses;
}

let resultado = pdl(10, 25);  // armazena os valores de vitoria e derrota

function rank(resultado) {
    if (resultado <= 10) {
        return "Ferro";
    } else if (resultado <= 20) {
        return "Bronze";
    } else if (resultado <= 50) {
        return "Prata";
    } else if (resultado <= 80) {
        return "Ouro";
    } else if (resultado <= 90) {
        return "Diamante";
    } else if (resultado <= 100) {
        return "Lendário";
    } else if (resultado >= 101) {
        return "Imortal";
    }
}

// Chama a função `rank` passando o valor de `resultado`
console.log("O Herói tem de saldo de " + resultado + " e está no nível de " + rank(resultado));
