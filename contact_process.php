<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require 'vendor/autoload.php';

	try {
		$to = "info@huashengtech.net";
	    $from = $_REQUEST['email'];
	    $name = $_REQUEST['name'];
	    $subject = $_REQUEST['subject'];
	    // $number = $_REQUEST['number'];
	    $cmessage = $_REQUEST['message'];
	    $headers = "From: $from";
		$headers = "From: " . $from . "\r\n";
		$headers .= "Reply-To: ". $from . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	    $subject = "You have a message from your Bitmap Photography.";

	    $logo = 'img/logo.png';
	    $link = '#';

		$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
		$body .= "<table style='width: 100%;'>";
		$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
		$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
		$body .= "</td></tr></thead><tbody><tr>";
		$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
		$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
		$body .= "</tr>";
		$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$subject}</td></tr>";
		$body .= "<tr><td></td></tr>";
		$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
		$body .= "</tbody></table>";
		$body .= "</body></html>";

	    //Server settings
	    $mail = new PHPMailer();
		$mail->IsSMTP();
		// $mail->CharSet = 'UTF-8';
	 //    $mail->Host       = 'smtp.gmail.com';
	 //    $mail->SMTPAuth   = true;
	 //    $mail->Username   = 'newcaesar628@gmail.com';
	 //    $mail->Password   = 'Top12345';
	 //    $mail->SMTPSecure = 'ssl';
	 //    $mail->Port       = 465;

	    //Recipients
	    $mail->From = $from;
	    $mail->FromName= $name;
	    $mail->isHTML(true);
		$mail->Subject = $subject;
	    $mail->Body = $body;
		$mail->addAddress($to);


	    //$mail->send();
	    echo 'Message has been sent';
	} catch (Exception $e) {
	    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}

?>
