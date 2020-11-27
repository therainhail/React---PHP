<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $db_host = "localhost";
    $db_user = "root";
    $db_password = "";
    $db_base = 'laravel-react';
    $db_table = "users";

    $mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);

	if ($mysqli->connect_error) {
	    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}

    $result = $mysqli->query("INSERT INTO ".$db_table." (name,email,password) VALUES ('$name','$email','$password')");

    if ($result == true){
        echo "<script>alert('Данные занесены в базу данных')</script>";
    }else{
        echo "<script>alert('Данные не занесены в базу данных')</script>";
    }
}
?>