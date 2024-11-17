<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $stmt = $pdo->prepare("INSERT INTO check_in (id_reservacion, fecha_check_in) VALUES (?, NOW())");
    $stmt->execute([$data['id_reservacion']]);
    echo json_encode(["message" => "Check-in realizado exitosamente"]);
}