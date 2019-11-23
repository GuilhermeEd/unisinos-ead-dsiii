<?php
include 'db.php';

$db = Database::getInstance();

$users = $db->query("select codigo, nome, IF(tipo = \"D\", \"Doador\", \"Instituição\") as tipo, ativo from usuario order by codigo")->fetchAll();
header('Content-Type: application/json');
echo json_encode($users);
?>
