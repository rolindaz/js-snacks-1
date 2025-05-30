// L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// L'utente inserisce due parole in successione, con due prompt.

const userWord1 = (prompt('Pick one word')), userWord2 = (prompt('Pick another word'));

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (userWord1.length > userWord2.length) {
    console.log(userWord2);
} else if (userWord2.length > userWord1.length) {
    console.log(userWord1);
} else {
    console.log(alert('Your words have the same number of characters!'));
};