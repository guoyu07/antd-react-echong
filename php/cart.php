<?php
    header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include "DBHelper.php";


    $username=isset($_GET['username'])?$_GET['username']:'';
    $addNum=isset($_GET['addNum'])?$_GET['addNum']:'';
    $orderid=isset($_GET['orderid'])?$_GET['orderid']:'';
    $deleteid=isset($_GET['deleteid'])?$_GET['deleteid']:'';


    $sql = "select * from orderlist where username='$username' and orderstate=1";
    if($deleteid){
        $sql3="delete from orderlist where orderid='$deleteid'";
        excute($sql3);      
    }
    if($addNum){
        $sql2 = "update orderlist set goodnumber='$addNum' where username='$username' and orderid='$orderid'"; 
        excute($sql2);
    }
    


    $result = query($sql);
    

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>