<?php
include 'db.php';


$codigo = isset($_GET["user"]) ? $_GET["user"] : -1;

if ($codigo == 0) {
	$user = array( array( "codigo" => 0, "nome"=> "Administrador", "tipo" => "A" ) );
} else { 
	$db = Database::getInstance();
	$user = $db->query('select codigo, nome, tipo, pref_doacao_doador as metodo_doacao from usuario where codigo = ?', $codigo)->fetchAll();
	if (sizeof($user) == 0) {
		$user = array( array( "codigo" => -1, "nome"=> "New User", "tipo" => "N" , "metodo_doacao" => 0) );
	}
}
header('Content-Type: application/json');
echo json_encode($user);
?>
