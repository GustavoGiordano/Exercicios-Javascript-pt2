/*80) Crie um programa que leia o nome e a idade de várias pessoas até que o nome "fim" seja informado. Ao final, exiba a média das idades. */

let soma = 0
let media = 0
let contadora = 0

for (let nome = prompt("Insira seu nome:"); nome !== "fim"; nome = prompt("Insira seu nome:")) {
    let idade = parseInt(prompt("Insira sua idade:"))
    soma += idade
    contadora++
}

if (contadora > 0) {
    media = soma / contadora
    alert(`A média das idades das pessoas é ${media}`)
}
