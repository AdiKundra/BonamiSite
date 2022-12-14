<?php

require 'mailer/vendor/autoload.php';

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
 
// //Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

function sendMail($email,$subject,$message){
	//required parameters...
	$production = 1;
	$siteName = 'Bonami Software';
	$MailFrom = 'aditiyakundra@bonamisoftware.com';

	//smtp request...
	$mail = new PHPMailer;
	$mail->IsSMTP();
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
    $mail->Username   = 'aditiyakundra@bonamisoftware.com';                     //SMTP username
    $mail->Password   = 'rnyhwkydkqszchzk';                  
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 587;           
    $mail->setFrom($MailFrom, $siteName);
    $mail->addAddress($email);     //Add a recipient
    $mail->addReplyTo($MailFrom, $siteName);

	$mail->Subject = $subject;
    $mail->Body    = $message;
	if($production != 1){
		$file = fopen(rand(99999,999999).'.html', 'w');
		fwrite($file, $message);
		fclose($file);
		return true;
	} else {
		if(!$mail->send()) {
			// return 0;
			return $mail->ErrorInfo;
		} else {
			return true;
		}
	}
}

?>