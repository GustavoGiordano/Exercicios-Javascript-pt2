/*77) Crie um programa que exiba os números ímpares de 50 a 1. */

let acumuladora = " "

for (let contadora = 50; contadora >= 1; contadora--) {
    if (contadora % 2 !== 0) {
        acumuladora += contadora + " "
    }
}

alert(`Programa que exibe os números ímpares de 50 a 1\n\n${acumuladora}`)
