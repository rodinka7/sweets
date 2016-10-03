<?php
/*if ($_POST) {
    $name = stripslashes(strip_tags($_POST['name']));
    $email = stripslashes(strip_tags($_POST['email']));
    $message = stripslashes(strip_tags($_POST['message']));
}
ob_start();
?>
<html>
<head>
<style type="text/css">
</style>
</head>
<body>
<table width="550" border="1" cellspacing="2" cellpadding="2">
  <tr bgcolor="#eeffee">
    <td>Name</td>
    <td><?=$name;?></td>
  </tr>
  <tr bgcolor="#eeeeff">
    <td>Email</td>
    <td><?=$email;?></td>
  </tr>
  <tr bgcolor="#eeffee">
    <td>Phone</td>
    <td><?=$phone;?></td>
  </tr>
</table>
</body>
</html>
<?
$body = ob_get_contents();

$to = 'rodinka7@gmail.com';
$fromaddress = $email;
$fromname = $name;

require("phpmailer.php");

$mail = new PHPMailer();

$mail->From     = $email;
$mail->FromName = $name;


$mail->WordWrap = 50;
$mail->IsHTML(true);

$mail->Subject  =  $message;
$mail->Body     =  $body;
$mail->AltBody  =  "This is the text-only body";

if(!$mail->Send()) {
    $recipient = 'your_email@example.com';
    $subject = 'Contact form failed';
    $content = $body;   
  mail($recipient, $subject, $content, "From: mail@yourdomain.com\r\nReply-To: $email\r\nX-Mailer: DT_formmail");
  exit;
}*/
?>

<?
if($_POST){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'rodinka7@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Почта: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>

<html>
<head>
<style type="text/css">
</style>
</head>
<body>
<table width="550" border="1" cellspacing="2" cellpadding="2">
  <tr bgcolor="#eeffee">
    <td>Name</td>
    <td><?=$name;?></td>
  </tr>
  <tr bgcolor="#eeeeff">
    <td>Email</td>
    <td><?=$email;?></td>
  </tr>
  <tr bgcolor="#eeffee">
    <td>Phone</td>
    <td><?=$phone;?></td>
  </tr>
</table>
</body>
</html>
