/*78) Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente. */

const numero = parseInt(prompt("Insira um número inteiro:"))

for (let numeroRestante = numero; numeroRestante > 0; numeroRestante = Math.floor(numeroRestante / 10)) {
    const digito = numeroRestante % 10
    alert(digito)
}
