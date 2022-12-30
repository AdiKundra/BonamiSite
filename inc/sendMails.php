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
	$MailFrom = 'info@bonamisoftware.co';
	//smtp request...
	$mail = new PHPMailer;
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->IsSMTP();
	$mail->Host       = 'mail.bonamisoftware.co';               //Set the SMTP server to send through
    $mail->SMTPSecure = 'ssl';                                  // Which security method to use. TLS is most secure.
    $mail->Username   = 'info@bonamisoftware.co';               //SMTP username
    $mail->Password   = 'R^-II-F*)l9)';                  
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;           
    $mail->setFrom($MailFrom);
    $mail->addAddress('skp28195@gmail.com');    //Add a recipient
    $mail->addReplyTo($MailFrom, $siteName);
    $mail->addCC("sahil.prajapati@bonamisoftware.com");
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
			// return 0;
			return $mail->ErrorInfo;
		} else {
			return true;
		}
	}
}

?>