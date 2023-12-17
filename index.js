/* ## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal */

let vitorias = 100000
let derrotas = 10

let rank = calcularRank(vitorias, derrotas)
console.log(rank)

function calcularRank(vitorias, derrotas){
    let rankSaldo =  vitorias - derrotas

    if(rankSaldo <= 10){
        return "Ferro"
    } else if(rankSaldo <=20){
        return "Bronze"
    } else if(rankSaldo <=50){
        return "Prata"
    } else if(rankSaldo <=80){
        return "Ouro"
    } else if(rankSaldo <=90){
        return "Diamante"
    } else if(rankSaldo <=100){
        return "Lendário"
    }

    return "Imortal"
}