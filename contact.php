<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$uni = $_POST['uni'];
$formcontent="From: $name \n Message: $message, Uni: $uni";
$recipient = "contact@unimentor.co.uk";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>