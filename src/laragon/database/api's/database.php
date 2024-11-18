<?php
$host = 'localhost';  // or 127.0.0.1
$db   = 'mexicana';
$user = 'root';
$pass = '';          // empty string if no password
$charset = 'utf8mb4';

try {
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}