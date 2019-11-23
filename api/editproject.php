<?php
include 'db.php';



$codigo = isset($_GET["codigo_projeto"]) ? $_GET["codigo_projeto"] : 0;

$db = Database::getInstance();
$projects = $db->query("select * from projeto where codigo = $codigo")->fetchAll();
header('Content-Type: application/json');
echo json_encode($projects);
?>
