'use strict';

// 1. Lue käyttöliittymän elementit muuttujiin
const newRowBtn = document.querySelector('#newRowBtn');
const jokerTable = document.querySelector('#jokerTable');
const rowCountElem = document.querySelector('#rowCount');

// 4. Muuttuja rivien laskemiselle
let rowCount = 0;

// 3. Funktio jokeririvin lisäämiselle
const addJokerRow = () => {
    // Luo uusi rivi taulukkoon
    const newRow = document.createElement('tr');

    // b. Toistolause, joka suoritetaan 7 kertaa
    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td'); // Luo uusi solu
        newCell.innerText = Math.floor(Math.random() * 10); // c. Satunnaisluku 0-9
        newRow.appendChild(newCell); // d. Lisää solu riviin
    }

    // Lisää uusi rivi taulukkoon
    jokerTable.appendChild(newRow);

    // 4. Päivitä rivien laskuri
    rowCount++;
    rowCountElem.innerText = `Valmiita rivejä: ${rowCount}`;
};

// 2. Toteuta kuuntelija napin painamiselle
newRowBtn.addEventListener('click', addJokerRow);
