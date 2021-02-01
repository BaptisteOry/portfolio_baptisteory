<?php

if(isset($_POST['coordonnees']) && isset($_POST['competences']) && isset($_POST['experiences'])){
echo ("Bravo Mr ".$_POST['coordonnees']." ! Grace à vos compétences ".$_POST['competences']." et vos expériences ".$_POST['experiences'].", votre candidature a été retenue");
}else{
echo ("Nous ne pouvons accepter votre candidature à défaut de vos informations");
}

?>