<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $category=isset($_GET['category'])?$_GET['category']:'';
    $typeList=isset($_GET['typeList'])?$_GET['typeList']:'';
    $xiaoliang=isset($_GET['xiaoliang'])?$_GET['xiaoliang']:'';
    $price=isset($_GET['price'])?$_GET['price']:'';
    if($category=="狗狗服饰"){
        $sql = "select * from dogclothes where goodIngredients='$typeList'";
    }
    else if($category=="狗狗食物"){
        $sql = "select * from dogfood where goodIngredients='$typeList'";
    }
    else if($category=="狗狗窝垫"){
        $sql = "select * from dogsnacks where goodIngredients='$typeList'";
    }
    else if($category=="狗狗玩具"){
        $sql = "select * from dogtoy where goodIngredients='$typeList'";
    }
    if($xiaoliang=="xiaoliang"){
            $sql .=" order by goodaudience desc";    
    }
    if($price=="up"){
            $sql .=" order by goodprice desc"; 
    }
    if($price=="down"){
            $sql .=" order by goodprice asc"; 
    }
    // $sql .=" where id='$paramsId'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>