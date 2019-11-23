<?php
include 'db.php';



$codigo = isset($_GET["codigo_usuario"]) ? $_GET["codigo_usuario"] : 0;

$db = Database::getInstance();
$projects = $db->query("select codigo, email, senha, senha as senhaConfirmation, nome, tipo, cpf_cnpj, data, cep, uf, cidade, bairro, endereco, telefone, pref_doacao_doador as pref_doacao, url_instituicao as url, banco_instituicao as banco, agencia_instituicao as agencia, conta_corrente_instituicao as conta, ativo from usuario where codigo = $codigo")->fetchAll();
header('Content-Type: application/json');
echo json_encode($projects);
?>
