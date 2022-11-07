<?

if($_POST["submit"])

{

    $email_admin = 'stoyanov.c@ya.ru'; if(!$email_admin) { $BAD = 'Поле $email_admin не заполнено'; }
    $subject = 'Тема тестовая';
    if($_POST["name"]) { $name = strip_tags ($_POST["name"]); } else { $BAD = 'Поле name не заполнено'; }

    if($_POST["email"]) { $email = strip_tags ($_POST["email"]); } else { $BAD = 'Поле email не заполнено'; }

    if($_POST["message"])

    {

    $message = 'Пользователь ' .$name .' с емайлом ' .$email .' написал : <br> '. strip_tags ($_POST["message"]);

    }

    else { $BAD = 'Поле message не заполнено'; }

    if(!$BAD)

    {

       $send = @mail($email_admin, $subject, $message);

        if($send) { $info = 'Сообщение отправлено'; } else {$BAD = 'не удалось отправить сообщение'; }

    }

    if($BAD){ $info = '<red>'.$BAD .'</red>';}

}

?>