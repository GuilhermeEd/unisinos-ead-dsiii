<?php
include 'db.php';

$db = Database::getInstance();

$json = trim(file_get_contents('php://input'));
error_log("JSON: $json");

$data = json_decode($json,true);

if (!array_key_exists("data_fim",$data) || strlen($data["data_fim"]) < 10) {
	$data["data_fim"] =  NULL;
} else {
	$data["data_fim"] = substr($data["data_fim"],0,10);
}

if (!array_key_exists("encerrar_projeto_objetivo",$data)) {
        $data["encerrar_projeto_objetivo"] =  0;
}

if (!array_key_exists("ativo",$data)) {
        $data["ativo"] =  0;
}



$db->query('UPDATE projeto SET nome = ?, descricao = ?, ativo = ?, encerrar_projeto_objetivo = ?, data_inicio = ?, data_fim = ?, objetivo_arrecadacao = ?, URL = ? WHERE codigo = ?', 
          $data["nome"], $data[ "descricao"], $data["ativo"], $data["encerrar_projeto_objetivo"], substr($data["data_inicio"],0,10), $data["data_fim"], $data["objetivo_arrecadacao"], $data["URL"], $data["codigo"]);
?>
