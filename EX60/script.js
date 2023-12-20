/*60) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while". */

alert("Programa que apresente a série de Fibonacci até o vigésimo termo.")

let anterior = 0
let atual = 1
let soma = 0
let contadora = 1
let sequencia = " "

do {
    soma = anterior + atual
    sequencia += soma + " "
    if (contadora == 1) {
        atual = 0
        anterior = 1
    }
    anterior = atual
    atual = soma
    contadora += 1
} while (contadora <= 20)

alert(sequencia)
