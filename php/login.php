<?php
    header('Access-Control-Allow-Origin:*');
    $servername='10.3.135.102';
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
    $sql="select username from member where username='$username' and password='$password' ";
    $result = $conn->query($sql);
    

    $row = $result->fetch_row();
    if($row){

        $result->free();
       
        class Obj{
            var $aa = 'ok';
        }
        $o = new Obj();
        $arr = array($o);
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }else{

        $result->free();
        class Obj{
            var $aa = 'fail';
        }
        $o = new Obj();
        $arr = array($o);
        echo json_encode($arr, JSON_UNESCAPED_UNICODE);        
    }  
    //关闭连接
    $conn->close();

?>
