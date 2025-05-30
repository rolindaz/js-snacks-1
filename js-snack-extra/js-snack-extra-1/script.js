// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedi un numero all'utente

let userNumber = Number(prompt('Pick a number'));
let cubeSum = [];

for (i = userNumber; i >= 0; i--) {
    let cube = i * i * i;
    cubeSum.push(cube);
}

console.log(cubeSum.reverse());


