<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query("SELECT * FROM reservaciones");
    $reservaciones = $stmt->fetchAll();
    echo json_encode($reservaciones);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $stmt = $pdo->prepare("INSERT INTO reservaciones (id_usuario, id_vuelo, fecha_reserva, estado, precio_total) VALUES (?, ?, NOW(), ?, ?)");
    $stmt->execute([$data['id_usuario'], $data['id_vuelo'], $data['estado'], $data['precio_total']]);
    echo json_encode(["message" => "Reservación creada exitosamente"]);
}