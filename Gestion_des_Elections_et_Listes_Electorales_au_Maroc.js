const prompt = require("Prompt-sync")();
let candidat = {};

//Data Set-up
let stockCandidats = [
    { cin: "T321456", nom: "salim", prenom: "amajjoute", partiPolitique: "Independant", age: 24, electeurs: ["T778899", "T334455"] },
    { cin: "QR1234", nom: "fatima", prenom: "Zahra", partiPolitique: "Parti G", age: 31, electeurs: ["E31452", "E72819", "E56143"] },
    { cin: "ST5678", nom: "hamza", prenom: "Adil", partiPolitique: "Parti H", age: 27, electeurs: ["E91827", "E63541", "E47283", "E19283"] },
    { cin: "UV9012", nom: "nour", prenom: "Hamid", partiPolitique: "Parti I", age: 39, electeurs: ["E82736", "E19384", "E56472", "E91835", "E72619"] },
    { cin: "WX3456", nom: "rachid", prenom: "Mounir", partiPolitique: "Independant", age: 42, electeurs: ["E38472", "E61529"] },
    { cin: "YZ7890", nom: "salma", prenom: "Hajar", partiPolitique: "Parti G", age: 35, electeurs: ["E19375", "E48261", "E73519", "E82643", "E51739", "E62418"] },
    { cin: "AB6789", nom: "bilal", prenom: "Sofiane", partiPolitique: "Parti H", age: 30, electeurs: ["E71528", "E93641", "E28473"] },
    { cin: "CD2345", nom: "ikram", prenom: "Samira", partiPolitique: "Parti I", age: 46, electeurs: ["E52819", "E63724", "E19485", "E72638"] },
    { cin: "EF6789", nom: "younes", prenom: "Khalid", partiPolitique: "Parti G", age: 25, electeurs: ["E48293", "E71625"] },
    { cin: "GH0123", nom: "lina", prenom: "Maha", partiPolitique: "Parti H", age: 34, electeurs: ["E19362", "E82741", "E56493", "E71826", "E43517"] }
];
let stockElecteurs = [];

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
    console.log("============================================================================");
    let askCin = prompt("Ajouter le cin du candidat: ");
    console.log("");
    for (let i = 0; askCin === stockCandidats[i].cin; i++) {
        return (console.log("Ce cin deja existe!"));
        console.log("");
    }
    let askNom = prompt("Ajouter le nom du condidat: ");
    console.log("");
    let askPrenom = prompt("Ajouter le prenom du condidat: ");
    console.log("");
    let askPartiPolitique = prompt("Ajouter la parti politique du condidat: ");
    if (askPartiPolitique == "") {
        askPartiPolitique = "Independant";
    }
    console.log("");
    let askAge = parseInt(prompt("Ajouter l'age du candidat: "));
    console.log("============================================================================");
    console.log("");

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
    console.log("============================================================================");
    let condidatNum = parseInt(prompt("Combien de candidat voulez-vous ajouter?: "));
    console.log("============================================================================");
    console.log("");
    for (let i = 1; i <= condidatNum; i++) {
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
        console.log("============================================================================");
        console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
        console.log("============================================================================");
        console.log("");
    }
}
    //Trier les candidats par nombre de votes func
function afficheTrie() {
    let swp;

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats.length - i - 1; j++) {
            if (stockCandidats[j].electeurs.length < stockCandidats[j+1].electeurs.length) {
                swp = stockCandidats[j];
                stockCandidats[j] = stockCandidats[j + 1];
                stockCandidats[j + 1] = swp;
            }
        }
    }
    for (let i = 0; i < stockCandidats.length; i++) {
        console.log("============================================================================");
        console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
        console.log("============================================================================");
        console.log("");
    }
}
    //Filtrer et afficher uniquement les candidats d'un parti politique spécifique func
function affichePartyPolitique() {
    console.log("============================================================================");
    let askChoise = prompt("Entrer une parti politique specifique pour voir ces candidat: ");
    console.log("============================================================================");
    console.log("");
    let check = true;

    for (let i = 0; i < stockCandidats.length; i++) {
        if (stockCandidats[i].partiPolitique === askChoise) {
            check = false;
        }
    }

    if (check === true) {
        console.log("============================================================================");
        console.log("Y'a aucune parti avec ce nom dans notre list.");
        console.log("============================================================================");
        console.log("");
    } else {
        for (let i = 0; i < stockCandidats.length; i++) {
            if (stockCandidats[i].partiPolitique == askChoise) {
                console.log("============================================================================");
                console.log(`Identifiant: ${stockCandidats[i].cin} |  nom: ${stockCandidats[i].nom} | prénom: ${stockCandidats[i].prenom} | Parti politique: ${stockCandidats[i].partiPolitique} | Âge: ${stockCandidats[i].age} | Nombre de votes: ${stockCandidats[i].electeurs.length}`);
                console.log("============================================================================");
                console.log("");
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
            console.log("============================================================================");
            console.log("Entrer une valid option.");
            console.log("============================================================================");
            console.log("");
    }
}

//[4]. Voter pour un candidat
function voter() {
    console.log("============================================================================");
    let electeurCin = prompt("Entrer votre cin: ");
    console.log("============================================================================");
    console.log("");
    let alreadyVote = false;

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats[i].electeurs.length; j++) {
            if (electeurCin === stockCandidats[i].electeurs[j]) {
                alreadyVote = true;
            }
        }
    }

    if (alreadyVote === true) {
        console.log("============================================================================");
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau");
        console.log("============================================================================");
        console.log("");
    } else {
        console.log("============================================================================");
        let candidatCin = prompt("Entrer le Cin de votre candidat: ");
        console.log("============================================================================");
        console.log("");

        let checkFind = true;
        for (let i = 0; i < stockCandidats.length; i++) {
            if (candidatCin === stockCandidats[i].cin) {
                stockCandidats[i].electeurs[stockCandidats[i].electeurs.length] = electeurCin;
                console.log("============================================================================");
                console.log(`Vote enregistré pour: ${stockCandidats[i].nom} ${stockCandidats[i].prenom}`);
                console.log("============================================================================");
                console.log("");
                checkFind = false;
            }
            
        }
        if (checkFind) {
                console.log("============================================================================");
                console.log("Ce Candidat n'est pas enregistrer dans la list veiller entrer une nouvelle Cin disponible.");
                console.log("============================================================================");
                console.log("");
            }
        }
    }

//[5]. Modifier les informations d'un candidat
    //Modifier le parti politique d'un candidat.
function modifPartiPolitique() {
    console.log("============================================================================");
    let askModifPoli = prompt("Saisissez le cin du candidat dont vous souhaitez modifier le parti politique: ");
    console.log("============================================================================");
    console.log("");
    let alreadyIn = false;
    let i = 0;

    for (let i = 0; i < stockCandidats.length; i++) {
        if (askModifPoli === stockCandidats[i].cin) {
            alreadyIn = true;
        }
    }

    if (alreadyIn === false) {
        console.log("============================================================================");
        console.log("Entrer une valide cin.");
        console.log("============================================================================");
        console.log("");
    } else {
        console.log("============================================================================");
        let askWichPart = prompt("Entrer le nouvelle parti politique: ");
        console.log("============================================================================");
        console.log("");
        stockCandidats[i].partiPolitique = askWichPart;
        console.log("============================================================================");
        console.log(`Le parti politique de ${stockCandidats[i].nom} ${stockCandidats[i].prenom} a etait changer avec success.`);
        console.log("============================================================================");
        console.log("");
    }
}

    //Modifier l'âge d'un candidat
function modifAge() {
    console.log("============================================================================");
    let askModifAge = prompt("Saisissez le cin du candidat dont vous souhaitez modifier l'âge: ");
    console.log("============================================================================");
    console.log("");
    let alreadyIn = false;
    let i = 0;

    for (let i = 0; i < stockCandidats.length; i++) {
        if (askModifAge === stockCandidats[i].cin) {
            alreadyIn = true;
        }
    }

    if (alreadyIn === false) {
        console.log("============================================================================");
        console.log("Entrer une valide cin.");
        console.log("============================================================================");
        console.log("");
    } else {
        console.log("============================================================================");
        let askWichPart = prompt("Entrer le nouvelle age: ");
        console.log("============================================================================");
        console.log("");
        stockCandidats[i].age = askWichPart;
        console.log("============================================================================");
        console.log(`L'age de ${stockCandidats[i].nom} ${stockCandidats[i].prenom} a etait changer avec success.`);
        console.log("============================================================================");
        console.log("");
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
            console.log("============================================================================");
            console.log("Entrer une valid option.");
            console.log("============================================================================");
            console.log("");
    }
}

//[6]. Supprimer un candidat
function deleteCandidat() {
    console.log("============================================================================");
    let askDelete = prompt("Entrer le cin de candidat que vous voulez supprimer de la liste: ");
    console.log("============================================================================");
    console.log("");
    let i = 0;
    let checkin = true;

    for (i; i < stockCandidats.length; i++) {
        if (askDelete === stockCandidats[i].cin) {
            splice(stockCandidats, i);
            checkin = false;
        }
    }

    if (checkin) {
        console.log("============================================================================");
        console.log("Entrer une valid cin.");
        console.log("============================================================================");
        console.log("");
    } else {
        console.log("============================================================================");
        console.log(`Ce candidat est supprimer avec success.`);
        console.log("============================================================================");
        console.log("");
    }
}

//[7]. Rechercher des candidats
function rechercheCandidats() {
    console.log("============================================================================");
    let getName = prompt("Enter le nom de candidat: ");
    console.log("============================================================================");
    console.log("");
    let handleName = "";
    let check = true;
    let i = 0;

    for (i; i < stockCandidats.length; i++) {
        if (getName === stockCandidats[i].nom) {
            handleName = stockCandidats[i].nom;
            check = false;
            break;
        }
    }

    if (check === true) {
        console.log("============================================================================");
        console.log("Ce nom n'est pas dans notre list.");
        console.log("============================================================================");
        console.log("");
    } else {
        console.log("============================================================================");
        console.log(`Prenom: ${stockCandidats[i].prenom} | Nom: ${handleName} | Age: ${stockCandidats[i].age} | Cin: ${stockCandidats[i].cin} | Parti Politique: ${stockCandidats[i].partiPolitique} | Vote: ${stockCandidats[i].electeurs.length}.`)
        console.log("============================================================================");
        console.log("");
    }
}

//[8]. Statistiques de l'élection
    //Afficher le nombre total de candidats func
function afficheTotalCandidats() {
    console.log("============================================================================");
    console.log(`Le total de candidats c'est: ${stockCandidats.length}`);
    console.log("============================================================================");
    console.log("");
}

    //Afficher le nombre total de votes exprimés dans toute l'élection func
function nombreTotalElection() {
    let count = 0;

    for (let i = 0; i < stockCandidats.length; i++) {
        for (let j = 0; j < stockCandidats[i].electeurs.length; j++) {
                count++;        
        }
    }
    console.log("============================================================================");
    console.log(`Le nombre total de vote exprime: ${count}.`)
    console.log("============================================================================");
    console.log("");
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
        console.log("============================================================================");
        console.log(`Le Top 1 c'est: ${stockCandidats[0].nom} ${stockCandidats[0].prenom}`)
        console.log("");
    } if (stockCandidats.length > 1) {
        console.log("============================================================================");
        console.log(`Le Top 2 c'est: ${stockCandidats[1].nom} ${stockCandidats[1].prenom}`)
        console.log("");
    } if (stockCandidats.length >2) {
        console.log("============================================================================");
        console.log(`Le Top 3 c'est: ${stockCandidats[2].nom} ${stockCandidats[2].prenom}`);
        console.log("");
    } if (stockCandidats.length === 0) {
        console.log("============================================================================");
        console.log("Aucun candidat enregistrer.");
        console.log("============================================================================");
    }
}

    //Afficher le nombre de candidats par parti politique
function numCandidatPartPolitique() {
    let count = 0;
    console.log("============================================================================");
    let askPartiPolitiqueCandidat = prompt("Entrer la parti politique pour voir combien de candidats dans ce parti: ")
    console.log("============================================================================");
    console.log("");
    for (let i = 0; i < stockCandidats.length; i++) {
        if (askPartiPolitiqueCandidat === stockCandidats[i].partiPolitique) {
            count++;
        }
    }
    console.log("============================================================================");
    console.log(`Il ya ${count} candidat dans cette parti.`);
    console.log("============================================================================");
    console.log("");
}

    //Main func
function statistiquesElection() {
    console.log(`
    Entrer 1 pour: Afficher le nombre total de candidats.
    Entrer 2 pour: Afficher le nombre total de votes exprimés dans toute l'élection.
    Entrer 3 pour: Afficher le Top 3 des candidats ayant le plus de votes.
    Entrer 4 pour: Afficher le nombre de candidats par parti politique.
    ========================================================================================================================================`);
    let chooseOp = parseInt(prompt(": "))

    switch (chooseOp) {
        case 1:
            afficheTotalCandidats();
            break;
        case 2:
            nombreTotalElection();
            break;
        case 3:
            top3();
            break;
        case 4:
            numCandidatPartPolitique();
            break;
        default:
            console.log("============================================================================");
            console.log("Entrer une valid option.");
            console.log("============================================================================");
            console.log("");
    }
}

// -------------------- Menu -------------------
function menu() {  
    let choose;
                           // <---- Menu function
    do {
        console.log(`
        ===========================================
            **GESTION DES ELECTIONS ET LISTES**
                  **ELECTIONS AU MAROC**
        ===========================================
            1) => Ajouter un nouveau candidat :
            2) => Ajouter plusieurs candidats à la fois :
            3) => Afficher la liste des candidats :
            4) => Voter pour un candidat :
            5) => Modifier les informations d'un candidat :
            6) => Supprimer un candidat :
            7) => Rechercher des candidats :
            8) => Statistiques de l'élection :
            0) => Quitter`);
        choose = parseInt(prompt(": "));

        switch (choose) {
            case 1:
                ajouterCandidat();
                break;
            case 2:
                plusieursCandidat();
                break;
            case 3:
                affichageListe();
                break;
            case 4:
                voter();
                break;
            case 5:
                modifCandidatInf();
                break;
            case 6:
                deleteCandidat();
                break;
            case 7:
                rechercheCandidats();
                break;
            case 8:
                statistiquesElection();
                break;
            case 0:
                console.log("Merci pour l'utilisation au revoir :)");
                break;
            default:
                console.log("Entrer une option valid dans le menu.");
        }
    } while (choose)
}

menu();         // <---- Menu function calll