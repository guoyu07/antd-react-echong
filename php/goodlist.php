<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $title = isset($_POST['title']) ? $_POST['title'] : '';
    $id = isset($_POST['id']) ? $_POST['id'] : "";
    $goodpic = isset($_POST['goodpic']) ? $_POST['goodpic'] :'';
    $gooddetail = isset($_POST['gooddetail']) ? $_POST['gooddetail'] :'';
    $goodprice = isset($_POST['goodprice']) ? $_POST['goodprice'] :'';
    $gooddetail = isset($_POST['gooddetail']) ? $_POST['gooddetail'] :'';
    $goodnumber = isset($_POST['goodnumber']) ? $_POST['goodnumber'] :'';
    $goodname = isset($_POST['goodname']) ? $_POST['goodname'] :'';
    $ordertime = isset($_POST['ordertime']) ? $_POST['ordertime'] :'';
    $username = isset($_POST['username']) ? $_POST['username'] :'';
    $goodcolor = isset($_POST['goodcolor']) ? $_POST['goodcolor'] :'';
    $orderId = isset($_POST['orderId']) ? $_POST['orderId'] :'';
    $subtotal = isset($_post['subtotal'])?$_post['subtotal'] : '';
    $orderstate = isset($_POST['orderstate']) ? $_POST['orderstate'] :'1';
    

    switch ($title)
    {
    case '狗狗服饰':
      $title = "dogclothes";
      break;
    case "狗狗食物":
      $title = "dogfood";
      break;
    case "狗狗窝垫" :
      $title = "dogsnacks";
      break;
    case "狗狗玩具" :
      $title = "dogtoy";
      break;

    };
    $sql = "select * from $title WHERE goodId = $id;";
    $sql.= "select * from commit;";

    $sql.="insert into orderlist(goodpic,orderstate,ordertime,gooddetail,goodcolor,orderid,username,goodname,goodnumber,goodprice,subtotal) values ('$goodpic','$orderstate','$ordertime','$gooddetail','$goodcolor','$orderId','$username','$goodname','$goodnumber','$goodprice','$subtotal')";
    $result = multi_query_oop($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
