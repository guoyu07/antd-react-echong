<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include 'DBHelper.php';
    
    $nickname = isset($_GET['nickname']) ? $_GET['nickname'] : '';
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $species = isset($_GET['species']) ? $_GET['species'] : '';
    $condition = isset($_GET['state']) ? $_GET['state'] : '';
    $sex = isset($_GET['sex']) ? $_GET['sex'] : '';
    $datebirth = isset($_GET['datebirth']) ? $_GET['datebirth'] : '';

    $sql="insert into mypet (username,nickname,species,`condition`,sex,datebirth) values ('$username','$nickname','$species','$condition','$sex','$datebirth')";

    $result =excute($sql);
    if ($result===TRUE) {
        class Obj{
                    var $aa = 'true';
                }
                $o = new Obj();
                $arr = array($o);
                echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    } else {class Obj{
                    var $exist = 'false';
                }
                $o = new Obj();
                $arr = array($o);
                echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }
  
?>