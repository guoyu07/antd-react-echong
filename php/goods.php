<?php
	header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $title = isset($_GET['title']) ? $_GET['title'] : '';
    switch ($title)
    {
    case '狗狗服饰':
      $title = "dogclothes";
      break;
    case "狗狗食物":
      $title = "dogfood";
      break;
    case "狗狗窝垫" :
      $title = "dogsnacks";
      break;
    case "狗狗玩具" :
      $title = "dogtoy";
      break;

    };
    $sql = "select * from $title";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
