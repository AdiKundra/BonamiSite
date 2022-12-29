<?php

require '../inc/sendMails.php';

if(isset($_POST)){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $aboutproject = $_POST['aboutproject'];

    $msg = 'name : ' . $name . '<br> email :' . $email . '<br> contact :' . $contact. '<br> Message :' . $aboutproject; 

    $sendMail = sendMail('sahil.prajapati@bonamisoftware.com' , 'form subbmission' , 'Test Message');
    if($sendMail){
        echo 'sucess';
    }else{
        echo 'error';
    }
    // print_r($msg);

}