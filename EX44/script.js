/*44) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades. */

let contadora = 1
let idade = 0
let soma = 0

while (contadora <= 5) {
    nome = prompt("Insira seu nome:")
    idade = parseInt(prompt("Insira sua idade:"))
    soma += idade
    contadora++
}

const media = soma / 5

alert(`A média das idades é ${media}`)
