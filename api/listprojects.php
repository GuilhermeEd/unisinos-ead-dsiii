<?php
include 'db.php';

$db = Database::getInstance();

$user = isset($_GET["user"]) ? $_GET["user"] : 0;
$sql = "";

if ($user != 0) { 
	$sql = "where projeto.codigo_usuario = $user";;
}


$projects = $db->query("select projeto.codigo, projeto.nome AS \"nome_projeto\", projeto.ativo, usuario.nome as \"nome_instituicao\", COALESCE(SUM(doacao.valor),0) as \"total_doacao\"
			from projeto
			LEFT JOIN usuario ON (projeto.codigo_usuario = usuario.codigo)
			LEFT JOIN doacao ON (doacao.codigo_projeto = projeto.codigo and doacao.confirmacao = TRUE) 
			$sql GROUP BY 1;")->fetchAll();
header('Content-Type: application/json');
echo json_encode($projects);
?>
