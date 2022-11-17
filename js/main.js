"use strict";
/**
 * Estratto: Devo
 * - creare un array di oggetti per i dipendenti della squadra,
 * ognuno con le informazioni fornite.
 * 
 * - Devo stampare nella console le informazioni di ogni dipendente,
 * cioè nome, ruolo, e la stringa della foto.
 * 
 * -Devo mostrare queste informazioni nel DOM come stringhe.
 * BONUS 1 e 2:
 * -Trasformare la foto da stringa ad immagine
 * - Organizzare ogni membro nella sua unica scheda.
 */

const listaDipendenti = [];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions
// Un metodo più veloce per creare oggetti da delle variabili è stato usato qui
function creaObjectPerDipendente(nome, ruolo, path_foto) {
    return { nome, ruolo, path_foto };
}

