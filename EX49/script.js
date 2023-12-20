/*49) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "while". */

const numero = parseInt(prompt("Digite um valor para saber seu fatorial:"))
let contadora = 1
let fatorial = 1

while (contadora <= numero) {
    fatorial *= contadora
    contadora++
}

alert(`O fatorial de ${numero} é ${fatorial}`)
