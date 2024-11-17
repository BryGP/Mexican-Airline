<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'config.php';

try {
    $stmt = $pdo->query("SELECT * FROM vuelos");
    $vuelos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Log para debugging
    error_log('Vuelos encontrados: ' . print_r($vuelos, true));
    
    echo json_encode($vuelos);
} catch (PDOException $e) {
    error_log('Error en la consulta: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Error al obtener los vuelos']);
}