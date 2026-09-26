const prompt = require("Prompt-sync")();
let candidat = {};
let stockCandidats = [
    { cin: "T321456", nom: "salim", prenom: "amajjoute", partiPolitique: "Indépendant", age: 24, electeurs: ["T778899", "T334455"] },
    { cin: "HH2345", nom: "said", prenom: "Prenom", partiPolitique: "Parti A", age: 20, electeurs: ["T1121", "T321122", "T061123", "T1111284"] },
    { cin: "HH3456", nom: "youssef", prenom: "Prenom", partiPolitique: "Parti B", age: 20, electeurs: ["HH131331", "HH13132", "HH11533", "HH14134", "HH1135"] },
    { cin: "HH4567", nom: "yassin", prenom: "Prenom", partiPolitique: "Parti C", age: 20, electeurs: ["HH11431", "HH11492", "HH11473", "HH15144", "HH61145", "HH16146"] },
    { cin: "T321456", nom: "hamid", prenom: "lmahdaoui", partiPolitique: "Indépendant", age: 24, electeurs: ["T73478899", "T33454455"] },
    { cin: "HH2345", nom: "abdilah", prenom: "chi7aja", partiPolitique: "Parti A", age: 20, electeurs: ["T1121", "T321122", "T061123", "T111124", "edezfez", "dezfezg", "sdafezfe"] },
    { cin: "HH3456", nom: "amine", prenom: "Prenom", partiPolitique: "Parti B", age: 20, electeurs: ["HH1131", "HH1132", "HH1133", "HH1134", "HH1135"] },
    { cin: "HH4567", nom: "nom", prenom: "Prenom", partiPolitique: "Parti C", age: 20, electeurs: ["HH1141", "HH1142", "HH1143", "HH1144"] }
];
let stockElecteurs = [];

//Section native functions
    //splice func
function splice(arr, i) {
    for (i; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return (arr);
}

//[1]. Ajouter un nouveau candidat
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

//[2]. Ajouter plusieurs candidats à la fois
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

//[3]. Afficher la liste des candidats
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
            if (stockCandidats[j].electeurs.length<stockCandidats[j+1].electeurs.length) {
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
    let askChoise = prompt("Entrer une parti politique specifique pour voir ces candidat: ");
    let check = true;

    for (let i = 0; i < stockCandidats.length; i++) {
        if (stockCandidats[i].partiPolitique === askChoise) {
            check = false;
        }
    }

    if (check === true) {
        console.log("Y'a aucune parti avec ce nom dans notre list.");
    } else {
        for (let i = 0; i < stockCandidats.length; i++) {
            if (stockCandidats[i].partiPolitique == askChoise) {
                console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
            }
        }
    }
}
    //Main func!!!
function affichageListe() {
    console.log(`
    Entrer 1 pour: Afficher tous les détails (Identifiant, nom, prénom, Parti politique, Âge, Nombre de votes).
    Entrer 2 pour: Trier les candidats par nombre de votes.
    Entrer 3 pour: Filtrer et afficher uniquement les candidats d'un parti politique spécifique.
    ========================================================================================================================================`);
    let choose = parseInt(prompt(": "));

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
    }
}

//[4]. Voter pour un candidat
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

    if (alreadyVote === true) {
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
    } else {
        let candidatCin = prompt("Entrer le Cin de votre candidat: ");

        for (let i = 0; i < stockCandidats.length; i++) {
            if (candidatCin === stockCandidats[i].cin) {
                stockCandidats[i].electeurs[stockCandidats[i].electeurs.length] = electeurCin;
                console.log(`Vote enregistré pour: ${stockCandidats[i].nom} ${stockCandidats[i].prenom}`);
                break;
            }
            else {
                console.log("Ce Candidat n'est pas enregistrer dans la list veiller entrer une nouvelle Cin disponible.");
                break;
            }
        }
    }
}

//[5]. Modifier les informations d'un candidat
    //Modifier le parti politique d'un candidat.
function modifPartiPolitique() {
    let askModifPoli = prompt("Saisissez le cin du candidat dont vous souhaitez modifier le parti politique: ");
    let alreadyIn = false;
    let i = 0;

    for (let i = 0; i < stockCandidats.length; i++) {
        if (askModifPoli === stockCandidats[i].cin) {
            alreadyIn = true;
        }
    }

    if (alreadyIn === false) {
        console.log("Entrer une valide cin.");
    } else {
        let askWichPart = prompt("Entrer le nouvelle parti politique: ");
        stockCandidats[i].partiPolitique = askWichPart;
        console.log(`Le parti politique de ${stockCandidats[i].nom} ${stockCandidats[i].prenom} a etait changer avec success.`);
    }
}

    //Modifier l'âge d'un candidat
function modifAge() {
    let askModifAge = prompt("Saisissez le cin du candidat dont vous souhaitez modifier l'âge: ");
    let alreadyIn = false;
    let i = 0;

    for (let i = 0; i < stockCandidats.length; i++) {
        if (askModifAge === stockCandidats[i].cin) {
            alreadyIn = true;
        }
    }

    if (alreadyIn === false) {
        console.log("Entrer une valide cin.");
    } else {
        let askWichPart = prompt("Entrer le nouvelle age: ");
        stockCandidats[i].age = askWichPart;
        console.log(`L'age de ${stockCandidats[i].nom} ${stockCandidats[i].prenom} a etait changer avec success.`);
    }
}

    //Main func!!!!
function modifCandidatInf() {
    console.log(`
    Entrer 1 pour: Modifier le parti politique d'un candidat.
    Entrer 2 pour: Modifier l'âge d'un candidat.
    ========================================================================================================================================`);
    let choose = parseInt(prompt(": "));

    switch (choose) {
        case 1:
            modifPartiPolitique();
            break;
        case 2:
            modifAge();
            break;
        default:
            console.log("Entrer une valid option.");
    }
}

//[6]. Supprimer un candidat
function deleteCandidat() {
    let askDelete = prompt("Entrer le cin de candidat que vous voulez supprimer de la liste: ");

    for (let i = 0; i < stockCandidats.length; i++) {
        if (askDelete === stockCandidats[i].cin) {
            splice(stockCandidats, i);
        }
    }
}

//[7]. Rechercher des candidats
function rechercheCandidats() {
    
}

//[8]. Statistiques de l'élection
    //Afficher le nombre total de candidats func
function afficheTotalCandidats() {
    console.log(`Le total de candidats c'est: ${stockCandidats.length}`);
}

    //Afficher le nombre total de votes exprimés dans toute l'élection func
function nombreTotalElection() {
    let count = 0;

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats[i].electeurs.length; j++) {
                count++;
                console.log(count)
        }
    }
    
}

    //Afficher le Top 3 des candidats ayant le plus de votes func
function top3() {
    let swp = [];

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats.length  - 1; j++) {
            if (stockCandidats[j].electeurs.length < stockCandidats[j + 1].electeurs.length) {
                swp = stockCandidats[j].electeurs;
                stockCandidats[j].electeurs = stockCandidats[j + 1].electeurs;
                stockCandidats[j + 1].electeurs = swp;
            }
        }
    }
    
   
    if (stockCandidats.length > 0) {
        console.log(`Le Top 1 c'est: ${stockCandidats[0].nom} ${stockCandidats[0].prenom}`)
    } if (stockCandidats.length > 1) {
        console.log(`Le Top 2 est: ${stockCandidats[1].nom} ${stockCandidats[1].prenom}`)
    } if (stockCandidats.length >2) {
        console.log(`Le Top 3 c'est: ${stockCandidats[2].nom} ${stockCandidats[2].prenom}`)
    } if (stockCandidats.length === 0) {
        console.log("Aucun candidat enregistrer.");
    }
}
    //Afficher le nombre de candidats par parti politique
function numCandidatPartPolitique() {
    let handle = 0;
    let askPartiPolitiqueCandidat = prompt("Entrer la parti politique pour voir tous les candidat dans ce parti: ")
    for (let i = 0; i < stockCandidats.length; i++) {
        if (askPartiPolitiqueCandidat === stockCandidats[i].partiPolitique) {
            handle += stockCandidats.length;
        }
    }
    console.log(`${handle}`);
}


numCandidatPartPolitique()
// rechercheCandidats();
// console.log(stockCandidats);