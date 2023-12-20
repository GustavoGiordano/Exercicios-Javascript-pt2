/*74) Crie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades. */

let soma = 0

for (let contadora = 1; contadora <= 5; contadora++) {
    nome = prompt("Insira seu nome:")
    let idade = parseInt(prompt("Insira sua idade:"))
    soma += idade
}

const media = soma / 5

alert(`A média das idades é ${media}`)
