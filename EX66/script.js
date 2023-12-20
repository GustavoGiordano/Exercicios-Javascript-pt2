/*66) Faça um programa que exiba os números de 1 a 10. */

let acumuladora = ""

for (let contadora = 1; contadora <= 10; contadora++) {
    acumuladora += contadora + " "
}

alert(`Números de 1 a 10 usando o loop "for"\n${acumuladora}`)
