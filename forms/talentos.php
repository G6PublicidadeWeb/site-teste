<?php
require("../PHPMailer/src/PHPMailer.php");
require("../PHPMailer/src/SMTP.php");

if (!empty($_POST)) {

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->CharSet = 'UTF-8';
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "g6publicidade.com";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "site@g6publicidade.com";
    $mail->Password = "G6PublicidadeWeb";

    $mail->SetFrom("site@g6publicidade.com");
    $mail->Subject = "Contato: Trabalhe Conosco";

    $mail->Body = " Olá,
                    Segue contato realizado em G6-Publicidade <b>Trabalhe Conosco</b>.<br>
                    Por favor entre em contato assim que possível.<br>
                    Obrigado.<br>";

    $mail->Body .= "<hr>
                    Nome: <b>{$_POST["nome"]}</b> <br>
                    Telefone: <b>{$_POST["numero"]}</b>  <br>
                    E-mail: <b>{$_POST["email"]}</b>  <br>
                    Cargo: <b>{$_POST["cargo"]}</b>  <br>";

    $anexo = $_FILES["anexo"];
    $mail->AddAttachment($anexo['tmp_name'], $anexo['name']  );

    $mail->AddAddress("contato@g6publicidade.com.br");
    if (!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
?>