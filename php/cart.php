<?php
    header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include "DBHelper.php";


    $username=isset($_GET['username'])?$_GET['username']:'';
    
    $sql = "select * from orderlist where username='$username' and orderstate=1"; 

    $result = query($sql);
    

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>