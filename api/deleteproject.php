<?php

include 'db.php';

$codigo = isset($_GET["codigo_projeto"]) ? $_GET["codigo_projeto"] : 0;


$db = Database::getInstance();
$user = $db->query("delete from projeto where codigo = $codigo");
?>
