/*63) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while".*/

const numero = parseInt(prompt("Insira um número inteiro:"))
let numeroRestante = numero

do {
    const digito = numeroRestante % 10
    alert(digito)
    numeroRestante = (numeroRestante - digito) / 10
} while (numeroRestante > 0)
