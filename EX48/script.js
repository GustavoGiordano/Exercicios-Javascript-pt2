/*48) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "while". */

const numero = parseInt(prompt("Insira um número inteiro:"))
let numeroRestante = numero

while (numeroRestante > 0) {
    const digito = numeroRestante % 10
    alert(digito)
    numeroRestante = (numeroRestante - digito) / 10
}
