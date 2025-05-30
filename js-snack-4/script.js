// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// Crea un array vuoto

const numbers = [];

// Chiedi per 6 volte all'utente di inserire un numero

for (i = 0; i < 6; i++) {
    userNumber = Number(prompt('Pick a number'));
    // se è dispari inseriscilo nell'array
    if (userNumber % 2 !== 0) {
        numbers.push(userNumber);
    }
};

console.log(numbers);
