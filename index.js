
//Declaro a variável o saldoVitorias 
let saldoVitorias = calcularRank(58, 9);

//Criei a função com parâmetro vitorias e derrotas para fazer o cálculo
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}


//Determina o nível do jogador com base na quantidade de vitórias
let nivel;
if (nivel <= 10) {
   nivel = "Ferro "
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel ="Bronze"
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel ="Prata"
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel ="Ouro"
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel ="Diamante"
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel ="Lendário"
} else if (saldoVitorias >= 101) {
    nivel ="Imortal"
} else {
    nivel =" Tenta novamente"
}


//Exibe a mensagem com o saldo de vitórias e o nível do jogador
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)


