let limiteSuperior = 100;
let numeroSecreto = parseInt(Math.random() * limiteSuperior + 1);
let chute;
let tentativas = 1;

alert("Seja bem-vindo(a) ao jogo do número secreto!");

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${limiteSuperior}:`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute < numeroSecreto) {
            alert(`O seu chute (${chute}) é menor que o número secreto!`);
        } else {
            alert(`O seu chute (${chute}) é maior que o número secreto!`);
        } 
    }
    tentativas++;
}

let palavra = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} ${palavra}! =)`);