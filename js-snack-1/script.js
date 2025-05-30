// L'utente inserisce due numeri in successione, con due prompt. 

// L'utente inserisce due numeri in successione, con due prompt.

let userNumber1 = Number(prompt('Pick your first number')), userNumber2 = Number(prompt('Pick your second number'));

// Il software stampa il maggiore.

if (userNumber1 > userNumber2) {
    console.log(userNumber1);
} else if (userNumber2 > userNumber1) {
    console.log(userNumber2);
} else {
    console.log(alert('Your numbers are the same!'));
};