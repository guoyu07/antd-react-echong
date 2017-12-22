<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');


    include 'DBHelper.php';
    $username = isset($_POST['username']) ? $_POST['username'] : '';

    $sql = "select * from mypet where username ='111'";
    // mysqli_query($conn,"UPDATE orders SET status=1 WHERE username='$username'");
    // 获取查询结果
    $result =query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);
  
?>