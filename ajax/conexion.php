<?php
$mysql_host = 'localhost:3306';
$mysql_usuario = 'root';
$mysql_clave = '';
$mysql_BD = 'mega_shop';
$con = mysqli_connect($mysql_host, $mysql_usuario, $mysql_clave, $mysql_BD);
if (mysqli_connect_errno()){
    echo "Error con la conexión" . mysqli_connect_error();
}else{
    echo "Conectado";
}
    // require "conexion.php";
    // $result = mysqli_query($con, "SELECT * FROM users");

?>