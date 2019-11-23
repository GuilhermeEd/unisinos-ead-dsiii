<?php
include 'db.php';

$db = Database::getInstance();

$projects = $db->query("select codigo as codigo_projeto, nome, descricao, URL from projeto where ativo = true ORDER BY 1")->fetchAll();
header('Content-Type: application/json');
echo json_encode($projects);
?>
