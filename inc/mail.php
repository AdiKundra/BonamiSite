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
            // $sendMail = sendMail();
            if($sendMail){
                // do something
            }else{
                // do something
            }
        }else{
            echo "Something went wrong, Please try again later";
        }
    }

}