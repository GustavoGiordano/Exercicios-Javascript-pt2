/*57) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while". */

const numero = parseInt(prompt("Insira um número inteiro:"))
let divisor = 2
let primo = true

if (numero === 2) {
    alert("2 é um número primo.")
} else {
    do {
        if (numero % divisor === 0) {
            primo = false
        }
        divisor++
    } while (divisor < numero && primo);

    if (primo && numero > 1) {
        alert(`${numero} é um número primo.`)
    } else {
        alert(`${numero} não é um número primo.`)
    }
}
