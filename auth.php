<?php
if (isset($_POST['email']) && isset($_POST['password'])){

    $email = $_POST['email'];
    $password = $_POST['password'];

    $db_host = "localhost";
    $db_user = "root"; // Логин БД
    $db_password = "";
    $db_base = 'laravel-react'; // Имя БД
    $db_table = "users"; // Имя Таблицы БД

    $mysqli = mysqli_connect($db_host,$db_user,$db_password,$db_base);

    $result = mysqli_query($mysqli, "SELECT * FROM users WHERE email='" . $email . "' and password = '". $password ."'");
    $count  = mysqli_num_rows($result);

    if($count==0) {
		echo "Неправильный email или пароль!";
	} else {
        echo "<script>alert('Вы авторизованы')</script>";
	}
}
?>
