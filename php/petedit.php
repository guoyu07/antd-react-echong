<?php
    header('Access-Control-Allow-Origin:*');
    // $servername='192.168.155.1';
    include "DBHelper.php";
    

    // 接受前端数据
    $petid = isset($_GET['petid']) ? $_GET['petid'] :'';
    $nickname=isset($_GET['nickname']) ? $_GET['nickname'] :'';
    $species= isset($_GET['species']) ? $_GET['species'] :'';
    $condition= isset($_GET['state']) ? $_GET['state'] :'';
    $sex =isset($_GET['sex']) ? $_GET['sex'] :'';
    $datebirth =isset($_GET['datebirth']) ? $_GET['datebirth'] :'';
    
    $sql = "update mypet set nickname = '$nickname',species = '$species',`condition` = '$condition',sex = '$sex',datebirth = '$datebirth' where petid='$petid'";
	
	$result = excute($sql);

?>