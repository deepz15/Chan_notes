<?php
     
    require 'dbconnection.php';
    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');

    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $title  = $data->title ;
    
    $content = $data->content;

    

    if(isset($data)){
        
    $sql = "INSERT INTO d_table1 (title ,  content)
        VALUES ('$title ','$content')";
    $result = mysqli_query($conn,$sql);
    }
    if($sql){
        echo "inserted";
    }
?>