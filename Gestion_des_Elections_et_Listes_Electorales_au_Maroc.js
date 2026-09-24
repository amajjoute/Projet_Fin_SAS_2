const prompt = require("Prompt-sync")();

//1. Ajouter un nouveau candidat
let askCin = prompt("Ajouter le cin du candidat: ");
let askNom = prompt("Ajouter le nom du condidat: ");
let askPrenom = prompt("Ajouter le prenom du condidat: ");
let askPartiPolitique = prompt("Ajouter la parti politique du condidat: ");
let askAge = parseInt(prompt("Ajouter l'age du candidat: "));

let candidat = {
    cin: askCin,
    nom: askNom,
    prenom: askPrenom,
    partiPolitique: askPartiPolitique,
    age: askAge,
    electeurs: []
};

//2. Ajouter plusieurs candidats à la fois
let condidatNum = parseInt(prompt("Combien de candidat voulez-vous ajouter?: "));
for (let i = 0; i < condidatNum; i++) {
    //call the Ajouter un nouveau candidat function here!!!!
}

//3. Afficher la liste des candidats
