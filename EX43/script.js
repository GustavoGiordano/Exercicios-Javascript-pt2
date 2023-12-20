/*43) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while". */

alert("Programa que apresenta a série de Fibonacci até um número inteiro inserido.")

const numeroLimite = parseInt(prompt("Insira um número inteiro:"))
let anterior = 0
let atual = 1
let soma = 0
let contadora = 1
let sequencia = " "

while (contadora <= numeroLimite) {
    soma = anterior + atual
    sequencia += soma + " "
    if (contadora == 1) {
        atual = 0
        anterior = 1
    }
    anterior = atual
    atual = soma
    contadora += 1
}
alert(sequencia)