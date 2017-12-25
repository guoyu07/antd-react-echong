<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";


    $category=isset($_GET['category'])?$_GET['category']:'';
    if($category=="狗狗服饰"){
        $sql = "select * from dogclothes";
    }
    else if($category=="狗狗食物"){
        $sql = "select * from dogfood";
    }
    else if($category=="狗狗窝垫"){
        $sql = "select * from dogsnacks";
    }
    else if($category=="狗狗玩具"){
        $sql = "select * from dogtoy";
    }
    // $sql .=" where id='$paramsId'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>