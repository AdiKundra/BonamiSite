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

function sendMail($subject,$message){
	//required parameters...
	$production = 1;
	$siteName = 'Bonami Software';
	$MailFrom = 'test@bonamisoftware.com';
	//smtp request...
	$mail = new PHPMailer;
	$mail->IsSMTP();
    $mail->SMTPAuth = 'ssl';                                   //Enable SMTP authentication
    $mail->SMTPSecure = true;                                  // Which security method to use. TLS is most secure.
	$mail->Host       = 'smtp.gmail.com';                      //Set the SMTP server to send through
	
    $mail->Port       = 465;           
    $mail->Username   = '';              //SMTP username
    $mail->Password   = '';             
    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->setFrom($MailFrom,'Website Contact From Details');
    $mail->Subject = 'Website Contact From Details';
    $mail->addAddress('nikita.jeena@bonamisoftware.com');    //Add a recipient
    $mail->addReplyTo($MailFrom, $siteName);
    $mail->addCC("contact@bonamisoftware.com");
    $mail->IsHTML(true);
    // $mail->addCC("adityakundra@bonamisoftware.com");
    // $mail->addCC("satishpandey.soft@gmail.com");
    $mail->Body = $message;
   
	if($production != 1){
		$file = fopen(rand(99999,999999).'.html', 'w');
		fwrite($file, $message);
		fclose($file);
		$file = fopen(rand(99999,999999).'.html', 'w');
		fwrite($file, $message);
		fclose($file);
		return true;
	} else {
		if(!$mail->send()) {
// 			return false;
			return $mail->ErrorInfo;
		} else {
			return true;
		}
	}
}

?>