<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';
    
    $addressee = isset($_GET['addressee']) ? $_GET['addressee'] : '';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $detailedly = isset($_GET['detailedly']) ? $_GET['detailedly'] : '';
    $phonenumber = isset($_GET['phonenumber']) ? $_GET['phonenumber'] : '';
    $default = isset($_GET['default']) ? $_GET['default'] : '0';
    
    
    $sql="insert into address (username,addressee,detailedly,phonenumber,`default`) values ('$username','$addressee','$detailedly','$phonenumber','$default')";

    $result =excute($sql);

    if ($result===TRUE) {
        class Obj{
                    var $aa = 'true';
                }
                $o = new Obj();
                $arr = array($o);
                echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    } else {class Obj{
                    var $exist = 'false';
                }
                $o = new Obj();
                $arr = array($o);
                echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
  
?>