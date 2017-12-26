<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
 
    $category=isset($_GET['category'])?$_GET['category']:'';
    $audience=isset($_GET['audience'])?$_GET['audience']:'';
    $paramsId=isset($_GET['paramsId'])?$_GET['paramsId']:'';
    if($category=="狗狗服饰"){
        $sql = "select * from dogclothes";
        if($audience){
            $sql2="update dogclothes set goodaudience='$audience' where goodId='$paramsId'";
            excute($sql2);
        }
    }
    else if($category=="狗狗食物"){
        $sql = "select * from dogfood";
        if($audience){
            $sql2="update dogfood set goodaudience='$audience' where goodId='$paramsId'";
            excute($sql2);
        }
    }
    else if($category=="狗狗窝垫"){
        $sql = "select * from dogsnacks";
        if($audience){
            $sql2="update dogsnacks set goodaudience='$audience' where goodId='$paramsId'";
            excute($sql2);
        }
    }
    else if($category=="狗狗玩具"){
        $sql = "select * from dogtoy";
        if($audience){
            $sql2="update dogtoy set goodaudience='$audience' where goodId='$paramsId'";
            excute($sql2);
        }
    }
    // $sql .=" where id='$paramsId'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>