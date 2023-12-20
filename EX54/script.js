/*54) Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos. */

let contadora = 1
let numero = 0
let soma = 0

do {
    numero = parseInt(prompt("Digite um número inteiro"))
    soma += numero
    contadora++
} while (contadora <= 5);

const media = soma / (contadora - 1)

alert(`A média aritmética dos valores lidos é \n${media}`)
