<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    $paramsId=isset($_GET['paramsId'])?$_GET['paramsId']:'';
    $category=isset($_GET['category'])?$_GET['category']:'';
    $paramsId=intval($paramsId);
    if($category=="狗狗服饰"){
        $sql = "select * from dogclothes";
    }
    else if($category=="狗粮"){
        $sql = "select * from dogfood";
    }
    else if($category=="保健"){
        $sql = "select * from dogsnacks";
    }
    else if($category=="玩具"){
        $sql = "select * from dogtoy";
    }
    // $sql .=" where id='$paramsId'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>