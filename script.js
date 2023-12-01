/* 
            Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

// al click del button controllo se la parola è palindroma
document.getElementById('control').addEventListener('click', function () {

    // Chiedo all'utente una parola e l'assegno ad una constante
    const userWord = document.getElementById('word').value;
    console.log(userWord);

    //valorizzo la variabile alla quale assegno il valore restituito dalla funzione
    let reverseWord = reversedWord(userWord);

    // in base al risultato della funzione mostro un messaggio all'utente
    if (controlPalindromeWord(userWord, reverseWord)) {
        document.getElementById('result').innerHTML = `la parola ${userWord} è palindroma`
    } else {
        document.getElementById('result').innerHTML = `la parola ${userWord} non è palindroma`
    }

})

/* FUNCTION */

// creo una funzion per invertire la parola
function reversedWord(word) {

    let reverseWord = '';
    //faccio un ciclo for per ricostruire la parola inversa, partendo dall'ultimo carattere al primo
    for (let i = word.length - 1; i >= 0; i--) {
        const character = word[i];
        reverseWord += character;
    }
    //restituisco il valore della parola invertita
    return reverseWord;
}

// creo una funzione per controllare se la parola è palindroma
function controlPalindromeWord(word, reverseWord) {
    if (word === reverseWord) {
        return true;
    }
    return false;
}


/* 
                Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

