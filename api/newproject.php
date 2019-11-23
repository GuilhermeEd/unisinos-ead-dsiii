<?php
include 'db.php';

$db = Database::getInstance();

$json = trim(file_get_contents('php://input'));
error_log("JSON: $json");


$data = json_decode($json,true);

if (!array_key_exists("data_fim",$data)) {
	$data["data_fim"] =  NULL;
} else {
	$data["data_fim"] = substr($data["data_fim"],0,10);
}

if (!array_key_exists("encerrar_projeto_objetivo",$data)) {
        $data["encerrar_projeto_objetivo"] =  0;
}

/*if (!array_key_exists("descricao",$data)) {
        $data["descricao"] =  'N/A';
}*/



$db->query('INSERT INTO projeto (codigo, nome, descricao, ativo, encerrar_projeto_objetivo, data_inicio, data_fim, objetivo_arrecadacao, codigo_usuario, URL ) 
            VALUES ( null, ?, ?, false, ?, ?, ?, ?, ?, ? )', 
            $data["nome"], $data[ "descricao"], $data["encerrar_projeto_objetivo"], substr($data["data_inicio"],0,10), $data["data_fim"], $data["objetivo_arrecadacao"], $data["user"], $data["URL"]);




?>
