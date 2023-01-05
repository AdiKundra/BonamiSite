<?php

require '../inc/sendMails.php';

if(isset($_POST)){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $aboutproject = $_POST['message'];
    $msg = 'name : ' . $name . '<br/> email :' . $email . '<br/> contact :' . $contact. '<br/> Message :' . $aboutproject; 
    $sendMail = sendMail('Website Form Submmission' , $msg);

    if($sendMail){
        print_r($sendMail);
    }else{
        echo 'error';
    }
}