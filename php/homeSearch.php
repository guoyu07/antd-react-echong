<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    $searchText=isset($_GET['searchText'])?$_GET['searchText']:'';
    $sql = "select * from dogclothes";
    if($searchText){
        $sql .=" where concat(gooddetail,goodaddress,goodclassify,gooddetail) like '%$searchText%'";
    }
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>