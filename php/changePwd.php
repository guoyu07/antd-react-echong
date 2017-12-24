<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 20:36:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-10 23:06:57
 */
header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
    include "./DBHelper.php"; 
    
    // 接受前端数据
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['new']) ? $_GET['new'] : '';
    $sql = "select password from member where username ='$username'";
    $result = query($sql);
    
    if($password ==$result[0]->password){
        class Obj{
                    var $exist = 'false';
                }
                $o = new Obj();
                $arr = array($o);
                echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }else{
        $changepwd = "UPDATE member SET password='$password' WHERE username='$username'";
        $result = excute($changepwd);
        
        class Obj{
                    var $aa = 'true';
                }
                $o = new Obj();
                $arr = array($o);
                echo json_encode($arr, JSON_UNESCAPED_UNICODE);
    }    
?>