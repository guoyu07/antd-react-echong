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
    $conn->set_charset('utf8');

    // 接受前端数据
    $username = isset($_GET['username']) ? $_GET['username'] :'';
    $password = isset($_GET['password']) ? $_GET['password'] :'';

  
    //查询用户名是否存在
    $sql="select username from member where username='$username' ";
    $result = $conn->query($sql);

    if($result->num_rows>0){ 
        // 释放查询内存(销毁)
        $result->free();
        // 用户名已经被占用
        // echo "fail";
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
    // else{
        
    //     if($username=='' or $password==''){
    //         // 释放查询内存(销毁)
    //         $result->free();
    //         // echo "null";
    //         echo json_encode($result, JSON_UNESCAPED_UNICODE);
        else{
            // 释放查询内存(销毁)
            $result->free();

            // $password=md5($password);

            $sql="insert into member (username,password) values ('$username','$password')";

            $result = $conn->query($sql);
            if ($result) {
                // 写入成功
                // echo "ok";
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            } else {
                // 写入失败
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    
    //关闭连接
    $conn->close();

?>