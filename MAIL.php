<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $option = htmlspecialchars($_POST['option']);
  $message = htmlspecialchars($_POST['message']);

  $to = "ваш_email@example.com"; // Замените на ваш email
  $subject = "Сообщение с сайта от " . $name;
  $body = "Имя: " . $name . "\n" .
          "Email: " . $email . "\n" .
          "Option: " . $option . "\n" .
          "Сообщение: " . $message;
  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    echo "Сообщение успешно отправлено!";
  } else {
    echo "Ошибка при отправке сообщения.";
  }
}
?>