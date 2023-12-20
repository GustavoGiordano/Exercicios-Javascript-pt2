/*47) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "while". */

let contadora = 1
let acumuladora = " "

while (contadora <= 50) {
    if (contadora % 2 != 0) {
        acumuladora += contadora + " "
    }
    contadora++
}

alert(`Programa que exibe os números ímpares de 1 a 50\n\n${acumuladora}`)
