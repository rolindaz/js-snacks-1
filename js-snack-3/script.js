// Il software deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


/* let totalNumbers = [];

for (i = 0; i <= 10; i++) {
    totalNumbers[i] = Number(prompt('Pick a number'));
    let userNumber = totalNumbers[i];
    totalNumbers = userNumber + totalNumbers[i];
};

console.log(totalNumbers); */

let sum = null;

for (i = 0; i < 10; i++) {
    userNumber = Number(prompt('Pick a number'));
    sum = userNumber + sum;
}

console.log(sum);
