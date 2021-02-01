   "use strict"; /* oblige à déclarer toute variable utilisée */

   $(document).ready(initialiser);

   function initialiser(evt) {
       $("#nom").keyup(recupererIdentite);
       $("#prenom").keyup(recupererIdentite);

       $("#boutonCompetence").click(recupererCompetence);
       $("#boutonSuppCompetence").click(supprimerCompetence);

       $("#boutonExperience").click(recupererExperience);
       $("#boutonSuppExperience").click(supprimerExperience);

       $("#boutonParcours").click(choisirParcours);
   }

   function recupererIdentite(evt) {
       var prenom = $("#prenom");
       var nom = $("#nom");

       if (prenom.val() != "" || nom.val() != "") {
           var prenomModif = prenom.val().charAt(0).toUpperCase() + prenom.val().substr(1);
           var nomModif = nom.val().charAt(0).toUpperCase() + nom.val().substr(1);
           $("#cv>h2").text("CV de " + prenomModif + " " + nomModif)

           $("#zoneCompetences").css("display", "block");
           $("#zoneExperience").css("display", "block");

       } else {
           $("#cv>h2").text("CV");
           $("#zoneCompetences").css("display", "none");
           $("#zoneExperience").css("display", "none");
       }
   }

   function recupererCompetence(evt) {
       var valeurCompetence = $("#competence").val();
       if (valeurCompetence != "") {
           var mesCompetences = $("#mesCompetences");
           if (mesCompetences.children().length == "") {
               mesCompetences.append("<h3>Mes compétences</h3>");
           }
           mesCompetences.append("<li>" + valeurCompetence + "</li>");

           afficherParcours();
           afficherPostuler();
       }
   }

   function supprimerCompetence(evt) {
       $("#mesCompetences>li:last-child").remove();
       if ($("#mesCompetences>li").length == "") {
           $("#mesCompetences>h3").remove();
       }

       afficherParcours();
       afficherPostuler();
   }

   function recupererExperience(evt) {
       var valeurTitreExperience = $("#titreExperience").val();
       var valeurDescExperience = $("#descExperience").val();

       if (valeurTitreExperience != "" && valeurDescExperience != "") {
           var mesExperiences = $("#mesExperiences");
           if (mesExperiences.children().length == "") {
               mesExperiences.append("<h3>Mes expériences professionnelles</h3>");
           }
           mesExperiences.append("<div><p>" + valeurTitreExperience + "</p><p>" + $("#debutExperience").val() + " - " + $("#finExperience").val() + "</p><p>" + valeurDescExperience + "</p></div>");

           afficherParcours();
           afficherPostuler();
       }
   }

   function supprimerExperience(evt) {
       $("#mesExperiences>div:last-child").remove();
       if ($("#mesExperiences>div").length == "") {
           $("#mesExperiences>h3").remove();
       }

       afficherParcours();
       afficherPostuler();
   }

   function afficherParcours() {
       if ($("#mesCompetences").children().length != "" && $("#mesExperiences").children().length != "") {
           $("#zoneParcours").css("display", "block");
       } else {
           $("#zoneParcours").css("display", "none");
       }
   }

   function choisirParcours(evt) {
       var choixHeures = prompt("Quel nombre d\'heures souhaitez-vous faire pendant le S4 en MMI ?", "");
       if (choixHeures != "" && choixHeures >= 0) {
           if (choixHeures > 20) {
               $("#propositionParcours").text("Nous vous proposons le parcours PID.");
           } else if (choixHeures < 10) {
               $("#propositionParcours").text("Nous vous proposons le parcours PECAG.");
           } else {
               $("#propositionParcours").text("Nous vous proposons le parcours Pluridisciplinaire.");
           }
           $("#boutonParcours").attr("value", "Changer votre parcours");

       } else {
           alert("Vous devez entrer un nombre d\'heures correct");
       }
   }