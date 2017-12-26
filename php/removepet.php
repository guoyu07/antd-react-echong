<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';
    $petid = isset($_GET['id']) ? $_GET['id'] : '';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $sql = "select * from orderlist where username ='111'";
    // mysqli_query($conn,"UPDATE orders SET status=1 WHERE username='$username'");
    // 获取查询结果
    $result =query($sql);

    $sql="delete from mypet where petid='$petid'";
    excute($sql);
    $sqls = "select * from mypet where username ='$username'";
    // mysqli_query($conn,"UPDATE orders SET status=1 WHERE username='$username'");
    // 获取查询结果
    $result =query($sqls);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>