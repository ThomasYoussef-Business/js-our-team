"use strict";
/**
 * Estratto: Devo
 * - creare un array di oggetti per i dipendenti della squadra,
 * ognuno con le informazioni fornite.
 * 
 * Nome             Ruolo                   Foto (nome file / url di un immagine)
 *  Wayne Barnett	 Founder & CEO	         wayne-barnett-founder-ceo.jpg
 *  Angela Caroll	 Chief Editor	         angela-caroll-chief-editor.jpg
 *  Walter Gordon	 Office Manager	         walter-gordon-office-manager.jpg
 *  Angela Lopez	 Social Media Manager	 angela-lopez-social-media-manager.jpg
 *  Scott Estrada	 Developer	             scott-estrada-developer.jpg
 *  Barbara Ramos	 Graphic Designer	     barbara-ramos-graphic-designer.jpg
 * 
 * - Devo stampare nella console le informazioni di ogni dipendente,
 * cioè nome, ruolo, e la stringa della foto.
 * 
 * -Devo mostrare queste informazioni nel DOM come stringhe.
 * 
 * BONUS 1 e 2:
 * -Trasformare la foto da stringa ad immagine
 * - Organizzare ogni membro nella sua unica scheda.
 */

/* ----------------------- Inizializzazione variabili ----------------------- */
const listaDipendenti = [];
const rigaDipendenti = document.getElementById("riga-dipendenti");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions
// Un metodo più veloce per creare oggetti da delle variabili è stato usato qui

/* ------------------- Aggiunta dei dipendenti alla lista ------------------- */
/* -------------------------------------------------------------------------- */
listaDipendenti.push(creaObjectPerDipendente(
    "Wayne Barnett",
    "Founder & CEO",
    "img/wayne-barnett-founder-ceo.jpg"
))

listaDipendenti.push(creaObjectPerDipendente(
    "Angela Caroll",
    "Chief Editor",
    "img/angela-caroll-chief-editor.jpg"
))

listaDipendenti.push(creaObjectPerDipendente(
    "Walter Gordon",
    "Office Manager",
    "img/walter-gordon-office-manager.jpg"
))

listaDipendenti.push(creaObjectPerDipendente(
    "Angela Lopez",
    "Social Media Manager",
    "img/angela-lopez-social-media-manager.jpg"
))

listaDipendenti.push(creaObjectPerDipendente(
    "Scott Estrada",
    "Developer",
    "img/scott-estrada-developer.jpg"
))

listaDipendenti.push(creaObjectPerDipendente(
    "Barbara Ramos",
    "Graphic Designer",
    "img/barbara-ramos-graphic-designer.jpg"
))
/* -------------------------------------------------------------------------- */

for (const dipendente of listaDipendenti) {
    console.log(`----------------------
${dipendente.nome}
${dipendente.ruolo}
${dipendente.path_foto}
----------------------`);

    rigaDipendenti.innerHTML += creaSchedaDipendente(dipendente);
}



/* -------------------------------- Funzioni -------------------------------- */
/* -------------------------------------------------------------------------- */
function creaObjectPerDipendente(nome, ruolo, path_foto) {
    return {
        nome,
        ruolo,
        path_foto
    };
}

function creaSchedaDipendente(dipendente) {
    return `<div class="col-12 col-md-4">
    <ul class="list-group">
        <li class="list-group-item">${dipendente.nome}</li>
        <li class="list-group-item">${dipendente.ruolo}</li>
        <li class="list-group-item">${dipendente.path_foto}</li>
    </ul>
</div>`;
}