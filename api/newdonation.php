<?php
include 'db.php';

$db = Database::getInstance();

$json = trim(file_get_contents('php://input'));
error_log("JSON: $json");


$data = json_decode($json,true);

$db->query('INSERT INTO doacao (codigo, confirmacao, metodo_doacao, valor, codigo_usuario, codigo_projeto)
            VALUES ( null, true, ?, ?, ?, ? )', 
            $data["metodo_doacao"], $data["valor"], $data["user"], $data["codigo_projeto"]);




?>
