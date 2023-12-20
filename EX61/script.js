/*61) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while". */

let numero = parseInt(prompt("Insira um número inteiro:"))
let contadora = 2
let soma = 0

do {
    if (contadora % 2 === 0) {
        soma += contadora
    }
    contadora++
} while (contadora <= numero)

alert(`O somatório dos valores pares existentes na faixa de 1 até ${numero} é ${soma}`)
