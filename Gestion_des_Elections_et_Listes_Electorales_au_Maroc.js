const prompt = require("Prompt-sync")();
let candidat = {};
let stockCandidats = [
    {cin: "T321456", nom: "salim", prenom: "amajjoute", partiPolitique: "Indépendant", age: 24, electeurs: ["T778899", "T334455"]},
    {cin: "HH2345" , nom: "nom" , prenom: "Prenom", partiPolitique: "Parti A", age: 20, electeurs: ["T1121","T321122","T061123","T111124"]},
    {cin: "HH3456" , nom: "nom" , prenom: "Prenom", partiPolitique: "Parti B", age: 20, electeurs: ["HH1131","HH1132","HH1133","HH1134","HH1135"]},
    {cin: "HH4567" , nom: "nom" , prenom: "Prenom", partiPolitique: "Parti C", age: 20, electeurs: ["HH1141","HH1142","HH1143","HH1144","HH1145","HH1146"]}
];
let stockElecteurs = [];

//1. Ajouter un nouveau candidat
function ajouterCandidat() {
    let askCin = prompt("Ajouter le cin du candidat: ");
    for (let i = 0; askCin === stockCandidats[i].cin; i++) {
        return (console.log("Ce cin deja existe!"));
    }
    let askNom = prompt("Ajouter le nom du condidat: ");
    let askPrenom = prompt("Ajouter le prenom du condidat: ");
    let askPartiPolitique = prompt("Ajouter la parti politique du condidat: ");
    if (askPartiPolitique == "") {
        askPartiPolitique = "Indépendant";
    }
    let askAge = parseInt(prompt("Ajouter l'age du candidat: "));

    candidat = {
        cin: askCin,
        nom: askNom,
        prenom: askPrenom,
        partiPolitique: askPartiPolitique,
        age: askAge,
        electeurs: []
    };
    stockCandidats[stockCandidats.length] = candidat;
}

//2. Ajouter plusieurs candidats à la fois
function plusieursCandidat() {
    let condidatNum = parseInt(prompt("Combien de candidat voulez-vous ajouter?: "));
    for (let i = 1; i <= condidatNum; i++) {
        console.log("");
        console.log("");
        console.log(`========== Ajouter le condidat ${i}: ==========`);
        console.log("");
        ajouterCandidat();
    }
}

//3. Afficher la liste des candidats
    //Afficher tous func
function afficheTous() {
    for (let i = 0; i < stockCandidats.length; i++) {
        console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
    }
}
    //Trier les candidats par nombre de votes func
function afficheTrie() {
    let swp;

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats.length - i - 1; j++) {
            if (stockCandidats[j + 1].electeurs.length > stockCandidats[j].electeurs.length  ) {
                swp = stockCandidats[j];
                stockCandidats[j] = stockCandidats[j + 1];
                stockCandidats[j + 1] = swp;
            }
        }
    }
    for (let i = 0; i < stockCandidats.length; i++) {
        console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
    }
}
    //Filtrer et afficher uniquement les candidats d'un parti politique spécifique func
function affichePartyPolitique() {
    for (let i = 0; i < stockCandidats.length; i++) {
        if (stockCandidats[i].partiPolitique != "Indépendant") {
            console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
        }
    }
}

function affichageListe() {
    let choose = parseInt(prompt(`
    Entrer 1 pour: Afficher tous les détails (Identifiant, nom, prénom, Parti politique, Âge, Nombre de votes.
    Entrer 2 pour: Trier les candidats par nombre de votes.
    Entrer 3 pour: Filtrer et afficher uniquement les candidats d'un parti politique spécifique.
    Entrer 4 pour: Quiter
    ========================================================================================================================================
    : `));
    

    switch (choose) {
        case 1:
            afficheTous();
            break;
        case 2:
           afficheTrie();
            break;
        case 3:
            affichePartyPolitique();
            break;
        default:
            console.log("Entrer une valid option.");
            break;
    }
}

//4. Voter pour un candidat
function voter() {
    let electeurCin = prompt("Entrer votre cin: ");
    let alreadyVote = false;

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats[i].electeurs.length; j++) {
            if (electeurCin === stockCandidats[i].electeurs[j]) {
                alreadyVote = true;
            }
        }
    }

    if (alreadyVote) {
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
    } else {
        let candidatCin = prompt("Entrer le Cin de votre candidat: ");

        for (let i = 0; i < stockCandidats.length; i++) {
            if (candidatCin === stockCandidats[i].cin) {
                stockCandidats[i].electeurs[stockCandidats[i].electeurs.length] = electeurCin;
                console.log(`Vote enregistré pour: ${stockCandidats[i].nom} ${stockCandidats[i].prenom}`);
            }
            else {
                console.log("Ce Candidat n'est pas enregistrer dans la list veiller entrer une nouvelle Cin disponible.");
            }
        }
    } 
}

// ajouterCandidat();
// affichageListe();
// plusieursCandidat();
// voter();
// affichageListe();
