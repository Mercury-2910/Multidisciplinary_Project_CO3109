<?php
header('Access-Control-Allow-Origin: *');
include '../../../db/conn.php';

$id = $_POST['id'];

$sql = "
SELECT *
FROM news
WHERE ID = '$id'; 
";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $response = $row;
}

header('Content-Type: application/json');
echo json_encode($response);
exit;
?>