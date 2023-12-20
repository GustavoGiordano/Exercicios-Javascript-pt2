/*46) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while". */

let numero = parseInt(prompt("Insira um número inteiro:"))
let contadora = 2
let soma = 0

while (contadora <= numero) {
    if (contadora % 2 == 0) {
        soma += contadora
    } 
    contadora++
}

alert(`O somatório dos valores pares existentes na faixa de 1 até ${numero} é ${soma}`)
