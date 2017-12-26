<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');


    include 'DBHelper.php';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $category = isset($_GET['category']) ? $_GET['category'] : '';
    $orderid = isset($_GET['orderid']) ? $_GET['orderid'] : '';

    if($category=='待付款'){
        $sql = "select * from orderlist where username ='$username' and orderstate='1'";
    }else if($category=='待收货'){
        $sql = "select * from orderlist where username ='$username' and orderstate='2'";
    }else if($category=='待评价'){
        $sql = "select * from orderlist where username ='$username' and orderstate='4'";
    }else if($orderid){
        $changepstate = "UPDATE orderlist SET orderstate='4' WHERE orderid='$orderid'";
        excute($changepstate);
        $sql = "select * from orderlist where username ='$username'";
    }else if($category=='全部订单'){
        $sql = "select * from orderlist where username ='$username'";
    }
    
    // mysqli_query($conn,"UPDATE orders SET status=1 WHERE username='$username'");
    // 获取查询结果
    $result =query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);
  
?>