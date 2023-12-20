/*79) Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário. */

const numero = parseInt(prompt("Digite um valor para saber seu fatorial:"))
let fatorial = 1

for (let contadora = 1; contadora <= numero; contadora++) {
    fatorial *= contadora
}

alert(`O fatorial de ${numero} é ${fatorial}`)
