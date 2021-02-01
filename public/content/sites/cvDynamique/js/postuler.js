function afficherPostuler() {
    if ($("#mesCompetences").children().length != "" && $("#mesExperiences").children().length != "") {
        $("#postuler").css("display", "block");
        document.getElementById("boutonPostuler").addEventListener("click", postulerEmployeur);
    } else {
        $("#postuler").css("display", "none");
    }
}

function postulerEmployeur(evt) {
    var coordonneesPostulant = $("#cv>h2").text().substr(5);
    var competencesPostulant = "";
    $("#mesCompetences>li").each(function () {
        competencesPostulant = competencesPostulant + $(this).text()+" ";
    });
    var experiencesPostulant = "";
    $("#mesExperiences>div>p:first-child").each(function () {
        experiencesPostulant = experiencesPostulant + $(this).text()+" ";
    });
    $.ajax({
        url: 'php/employeur.php', // La ressource ciblée
        type: 'POST', // Le type de la requête HTTP.
        data: '&coordonnees=' + coordonneesPostulant + '&competences=' + competencesPostulant + '&experiences=' + experiencesPostulant,
        dataType: 'text',
        success: function (reponse, statut) {
            $("#reponseEmployeur").text(reponse);
        },

        error: function (resultat, statut, erreur) {},

        complete: function (resultat, statut) {}
    });
}