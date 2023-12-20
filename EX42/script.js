/*42) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while". */

const numero = parseInt(prompt("Insira um número inteiro:"))
let divisor = 2
let primo = true

while (divisor < numero && primo) {
    if (numero % divisor === 0) {
        primo = false
    }
    divisor++
}

if (primo && numero > 1) {
    alert(`${numero} é um número primo.`)
} else {
    alert(`${numero} não é um número primo.`)
}
