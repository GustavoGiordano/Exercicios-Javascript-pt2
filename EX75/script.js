/*75) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci. */

alert("Programa que apresenta a série de Fibonacci até o vigésimo termo.")

let anterior = 0
let atual = 1
let soma = 0
let sequencia = " "

for (let contadora = 1; contadora <= 20; contadora++) {
    soma = anterior + atual
    sequencia += soma + " "
    
    if (contadora === 1) {
        atual = 0
        anterior = 1
    }

    anterior = atual
    atual = soma
}

alert(sequencia)
