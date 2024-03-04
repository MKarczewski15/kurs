// wyświetlenie alertu na stronie 
alert("siema");

// wypisanie czegoś w konsoli
console.log("siema");

// tworzenie zmiennych
const firstName = "Marek";
const age = "16"

console.log(firstName);
console.log(age);

console.log(`mam na imie ${firstName} i mam ${age} lat`);

class kalkulator {
    static wynik(a, b, c) {
        if (c === '+'){
            return a + b;
        } else if (c === '-') {
            return a - b;
        } else if (c === '*') {
            return a * b;
        } else if (c === '/') {
            if (b === 0) {
                console.log("nie można dzielićprzez 0");
            } else {
                return a / b;
            }
        } else {
            console.log("niepoprawny znak");
        }
    }
    
    static oblicz(a, b, c) {
        return this.wynik(a, b, c);
    }
}

console.log(kalkulator.oblicz(12, 34, "/"));