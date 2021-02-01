"use strict"; /* oblige à déclarer toute variable utilisée */

document.addEventListener("DOMContentLoaded", initialiser);

function initialiser(evt) {
    document.getElementById("nom").addEventListener("keyup", recupererIdentite);
    document.getElementById("prenom").addEventListener("keyup", recupererIdentite);

    document.getElementById("boutonCompetence").addEventListener("click", recupererCompetence);
    document.getElementById("boutonSuppCompetence").addEventListener("click", supprimerCompetence);

    document.getElementById("boutonExperience").addEventListener("click", recupererExperience);
    document.getElementById("boutonSuppExperience").addEventListener("click", supprimerExperience);

    document.getElementById("boutonParcours").addEventListener("click", choisirParcours);
}

function recupererIdentite(evt) {
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");

    if (prenom.value != "" || nom.value != "") {
        var prenomModif = prenom.value.charAt(0).toUpperCase() + prenom.value.substr(1);
        var nomModif = nom.value.charAt(0).toUpperCase() + nom.value.substr(1);
        document.querySelector("#cv>h2").innerHTML = "CV de " + prenomModif + " " + nomModif;

        document.getElementById("zoneCompetences").style.display = "block";
        document.getElementById("zoneExperience").style.display = "block";
    } else {
        document.querySelector("#cv>h2").innerHTML = "CV";
        document.getElementById("zoneCompetences").style.display = "none";
        document.getElementById("zoneExperience").style.display = "none";
    }
}

function recupererCompetence(evt) {
    var valeurCompetence = document.getElementById("competence").value;
    if (valeurCompetence != "") {
        var mesCompetences = document.getElementById("mesCompetences");
        if (mesCompetences.children.length == "") {
            var nouveauTitre = document.createElement("h3");
            nouveauTitre.textContent = "Mes compétences";
            mesCompetences.appendChild(nouveauTitre);
        }
        
        var nouvelleCompetence = document.createElement("li");
        nouvelleCompetence.textContent = valeurCompetence;
        mesCompetences.appendChild(nouvelleCompetence);

        afficherParcours();
        afficherPostuler();
    }
}

function supprimerCompetence(evt) {
    document.querySelector("#mesCompetences>li:last-child").remove();
    if (document.querySelectorAll("#mesCompetences>li").length == "") {
        document.querySelector("#mesCompetences>h3").remove();
    }

    afficherParcours();
    afficherPostuler();
}

function recupererExperience(evt) {
    var valeurTitreExperience = document.getElementById("titreExperience").value;
    var valeurDescExperience = document.getElementById("descExperience").value;
    
    if (valeurTitreExperience != "" && valeurDescExperience != "") {
        var mesExperiences = document.getElementById("mesExperiences");
        if (mesExperiences.children.length == "") {
            var nouveauTitre = document.createElement("h3");
            nouveauTitre.textContent = "Mes expériences professionnelles";
            mesExperiences.appendChild(nouveauTitre);
        }
        
        var nouvelleExperience = document.createElement("div");
        var nouveauTitreExp = document.createElement("p");
        nouveauTitreExp.textContent = valeurTitreExperience;
        var nouvellePeriode = document.createElement("p");
        nouvellePeriode.textContent = document.getElementById("debutExperience").value + " - " + document.getElementById("finExperience").value;
        var nouvelleDescExperience = document.createElement("p");
        nouvelleDescExperience.textContent = valeurDescExperience;
        nouvelleExperience.appendChild(nouveauTitreExp);
        nouvelleExperience.appendChild(nouvellePeriode);
        nouvelleExperience.appendChild(nouvelleDescExperience);
        mesExperiences.appendChild(nouvelleExperience);

        afficherParcours();
        afficherPostuler();
    }
}

function supprimerExperience(evt) {
    document.querySelector("#mesExperiences>div:last-child").remove();
    if (document.querySelectorAll("#mesExperiences>div").length == "") {
        document.querySelector("#mesExperiences>h3").remove();
    }

    afficherParcours();
    afficherPostuler();
}

function afficherParcours() {
    if (document.getElementById("mesCompetences").children.length != "" && document.getElementById("mesExperiences").children.length != "") {
        document.getElementById("zoneParcours").style.display = "block";
    } else {
        document.getElementById("zoneParcours").style.display = "none";
    }
}

function choisirParcours(evt) {
    var choixHeures = prompt("Quel nombre d\'heures souhaitez-vous faire pendant le S4 en MMI ?", "");
    if (choixHeures != "" && choixHeures >= 0) {
        if (choixHeures > 20) {
            document.getElementById("propositionParcours").innerHTML = "Nous vous proposons le parcours PID.";
        } else if (choixHeures < 10) {
            document.getElementById("propositionParcours").innerHTML = "Nous vous proposons le parcours PECAG.";
        } else {
            document.getElementById("propositionParcours").innerHTML = "Nous vous proposons le parcours Pluridisciplinaire.";
        }
        document.getElementById("boutonParcours").value = "Changer votre parcours";

    } else {
        alert("Vous devez entrer un nombre d\'heures correct");
    }
}