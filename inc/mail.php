<?php

require '../inc/sendMails.php';

if(isset($_POST)){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $aboutproject = $_POST['aboutproject'];
    $services = $_POST['service'];
    $document = $_FILES;

    $tmpName = $_FILES['file']['tmp_name'];
    if(file_exists($tmpName)){
        $fileName = $_FILES['file']['name'];
        $ext = pathinfo($fileName, PATHINFO_EXTENSION);
        $fileName = rand(111111111,999999999).".".$ext;
        if(move_uploaded_file($tmpName, '../uploads/'.$fileName)==true){
            echo "File upladed";
            // $msg = 'name : ' . $fname . ' ' . $lname. '<br> email :' . $email . '<br> contact :' . $contact. '<br> aboutproject :' . $aboutproject. '<br> services :' . $services; 
            $sendMail = sendMail('sahil.prajapati@bonamisoftware.com' , 'form subbmission' , 'Test Message');
            // if($sendMail){
            //     echo 'sucess';
            // }else{
            //     echo 'error';
            // }
            print_r($sendMail);
        }else{
            echo "Something went wrong, Please try again later";
        }
    }

}