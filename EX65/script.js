/*65) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "do-while" até que o nome "fim" seja informado. Ao final, exiba a média das idades. */

let nome = ""
let idade = 0
let soma = 0
let media = 0
let contadora = 0

do {
    nome = prompt("Insira seu nome:")
    if (nome !== "fim") {
        idade = parseInt(prompt("Insira sua idade:"))
        soma += idade
        contadora++
    }
} while (nome !== "fim")

if (contadora > 0) {
    media = soma / contadora
    alert(`A média das idades das pessoas é ${media}`)
}
