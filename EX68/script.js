/*68) Crie um programa que exiba os números pares de 1 a 50. */

let acumuladora = "";

for (let contadora = 2; contadora <= 50; contadora += 2) {
    acumuladora += contadora + " ";
}

alert(`Números pares de 1 a 50 usando o loop "for".\n${acumuladora}`);
