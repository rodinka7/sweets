<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'rodinka7@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = $_POST['title']; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Электронная почта: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Тема сообщения: '.$_POST['title'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель ".$_POST['email']."\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>