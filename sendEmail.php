<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "zackkymane1234@gmail.com"; // Replace with your receiving email address
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>
