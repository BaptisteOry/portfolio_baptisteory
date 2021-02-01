<?php
if ($_SERVER['REQUEST_METHOD']=='POST') {
 
  // Récupération des variables et sécurisation des données
  $nom = htmlentities($_POST['nom']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
  $prenom = htmlentities($_POST['prenom']);
  $email = htmlentities($_POST['email']);
  $sujet = htmlentities($_POST['sujet']);
  $message = htmlentities($_POST['message']);
 
  // Variables concernant l'email
 
  $destinataire = 'orybaptiste@gmail.com'; // Adresse email du webmaster
  $sujet = 'E-mail du portfolio'; // Titre de l'email
  $contenu = '<html><head><title>E-mail du portfolio</title></head><body>';
  $contenu .= '<p>Bonjour, vous avez reçu un message à partir de votre site web.</p>';
  $contenu .= '<p><strong>Prénom</strong> : '.$prenom.'</p>';
  $contenu .= '<p><strong>Nom</strong> : '.nom.'</p>';
  $contenu .= '<p><strong>Email</strong> : '.$email.'</p>';
  $contenu .= '<p><strong>Sujet</strong> : '.sujet.'</p>';
  $contenu .= '<p><strong>Message</strong> : '.$message.'</p>';
  $contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)
 
  // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
  $headers = "From: ".$email." <".$email.">\r\n"; $headers = "Reply-To: ".$email."\r\n";
  $headers = 'MIME-Version: 1.0'."\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
  'X-Mailer: PHP/' . phpversion();
    
  // Envoyer l'email
  if(mail($destinataire, $sujet, $contenu, $headers)){ 
      $marks = array("prenom"=>$prenom, "success"=>true);
      echo json_encode($marks);
  }else{ 
      echo json_encode(['success'=>false]);
  }
  exit;
}
?>