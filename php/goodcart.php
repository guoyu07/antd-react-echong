<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 20:36:53
 * @Last Modified by:   Marte
 */

    include "./DBHelper.php";   
    header('Access-Control-Allow-Origin:*');


    // 接受前端数据
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
    

    $sql="insert into orderlist(goodpic,orderstate,ordertime,gooddetail,goodcolor,orderid,username,goodname,goodnumber,goodprice,subtotal) values ('$goodpic','$orderstate','$ordertime','$gooddetail','$goodcolor','$orderId','$username','$goodname','$goodnumber','$goodprice','$subtotal')";

    $result = excute($sql);

?>
