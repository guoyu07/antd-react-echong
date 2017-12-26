<?php

include "./DBHelper.php";   
header('Access-Control-Allow-Origin:*');

$detail = isset($_POST['detail']) ? $_POST['detail'] :'';
$username = isset($_POST['username']) ? $_POST['username'] :'';
$time = isset($_POST['time']) ? $_POST['time'] :'';

$sql="insert into commit(detail,username,time) values ('$detail','$username','$time')";


$result = excute($sql);
    
    if ($result===TRUE) {
        // 写入成功
        $sqle = "select * from commit";
        $result = query($sqle);

        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else {
        // 写入失败
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

?>