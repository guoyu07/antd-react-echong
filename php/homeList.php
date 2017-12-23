<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $category=isset($_GET['category'])?$_GET['category']:'';
    $typeList=isset($_GET['typeList'])?$_GET['typeList']:'';
    if($category=="狗狗服饰"){
        $sql = "select * from dogclothes where goodIngredients='$typeList'";
    }
    else if($category=="狗粮"){
        $sql = "select * from dogfood where goodIngredients='$typeList'";
    }
    else if($category=="保健"){
        $sql = "select * from dogsnacks where goodIngredients='$typeList'";
    }
    else if($category=="玩具"){
        $sql = "select * from dogtoy where goodIngredients='$typeList'";
    }
    // $sql .=" where id='$paramsId'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>