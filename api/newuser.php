<?php
include 'db.php';

$db = Database::getInstance();

$json = trim(file_get_contents('php://input'));
error_log("JSON: $json");


$data = json_decode($json,true);

if (!array_key_exists("url",$data)) {
        $data["url"] =  "";
}

if (!array_key_exists("banco",$data)) {
        $data["banco"] =  "";
}

if (!array_key_exists("agencia",$data)) {
        $data["agencia"] =  "";
}

if (!array_key_exists("conta",$data)) {
        $data["conta"] =  "";
}

if (!array_key_exists("pref_doacao",$data)) {
        $data["pref_doacao"] = 0;
}


if (!array_key_exists("email",$data)) {
        $data["email"] =  'N/A';
}

if (!array_key_exists("endereco",$data)) {
        $data["endereco"] =  'N/A';
}

$data["ativo"] = ($data["tipo"] == "I") ? 0 : 1;




$db->query('INSERT INTO usuario (codigo, nome, endereco, email, tipo, senha, ativo, cpf_cnpj, data, cep, uf, cidade, bairro, telefone, pref_doacao_doador, url_instituicao, banco_instituicao, agencia_instituicao, conta_corrente_instituicao)  
            VALUES ( null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ? , ?, ? )', 
	$data["nome"], 
	$data["endereco"], 
	$data["email"],
	$data["tipo"],
	$data["senha"], 
	$data["ativo"],
	$data["cpf_cnpj"],
	substr($data["data"],0,10), 
	$data["cep"], 
	$data["uf"], 
	$data["cidade"], 
	$data["bairro"],
        $data["telefone"],
	$data["pref_doacao"],
	$data["url"],
	$data["banco"],
	$data["agencia"],
        $data["conta"]
	);
?>
