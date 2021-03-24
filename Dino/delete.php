<?php
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require 'dbconnection.php';
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($db, (int)$_GET['id']) : false;
if(!$id)
{
	return http_response_code(400);
}

$sql = "DELETE FROM d_table1 WHERE id =$id";
if($db->query($sql))
{
	http_response_code(204);
}
else
{
	return http_response_code(422);
}