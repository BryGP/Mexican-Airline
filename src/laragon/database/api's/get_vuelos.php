<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include 'db_connection.php';

$query = "SELECT * FROM vuelos";
$result = mysqli_query($conn, $query);

$vuelos = [];
while($row = mysqli_fetch_assoc($result)) {
    $vuelos[] = $row;
}

echo json_encode($vuelos);
?>