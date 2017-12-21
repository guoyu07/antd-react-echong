<?php
    header('Access-Control-Allow-Origin:*');
    // $servername='192.168.155.1';
    $servername='10.3.135.29';
    $username='root';
    $passWord='';
    $database='petshop';

    //连接注册登录数据库
    $conn = new mysqli($servername,$username,$passWord,$database);

    //检测连接
    if($conn->connect_error){
        die('连接失败'.$conn->connect_error);
    }

    //设置编码
    // $conn->set_charset('utf8');

    // 接受前端数据
    $username = isset($_GET['username']) ? $_GET['username'] :'';
    $password = isset($_GET['password']) ? $_GET['password'] :'';
  
    $sql = "select * from member where username='$username' and password='$password'"; 

    // 获取查询结果
    $result = $conn->query($sql);

    $row = $result->fetch_row();

    if($row){
        echo "ok";
    }else{
        echo "fail";
    }
    // // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();

?>