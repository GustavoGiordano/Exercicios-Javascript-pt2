/*72) Faça um programa que leia um número inteiro e exiba se ele é um número primo. */

const numero = parseInt(prompt("Insira um número inteiro:"))
let divisor = 2
let primo = true

if (numero === 2) {
    alert("2 é um número primo.")
} else {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            primo = false
            break
        }
    }

    if (primo && numero > 1) {
        alert(`${numero} é um número primo.`)
    } else {
        alert(`${numero} não é um número primo.`)
    }
}
