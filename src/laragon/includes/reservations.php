<?php
// Simulación de datos de reservas (en un escenario real, estos datos vendrían de la base de datos)
$reservations = [
    [
        'id' => 'MX12345',
        'route' => 'México City (MEX) - New York (JFK)',
        'status' => 'Confirmado',
        'date' => '15 de Agosto, 2024',
        'departureTime' => '10:00 AM',
        'arrivalTime' => '3:30 PM'
    ],
    [
        'id' => 'MX67890',
        'route' => 'Cancún (CUN) - Madrid (MAD)',
        'status' => 'Pendiente de Pago',
        'date' => '22 de Septiembre, 2024',
        'departureTime' => '11:30 PM',
        'arrivalTime' => '2:45 PM (siguiente día)'
    ]
];
?>

<header>
    <a href="index.php" class="logo-link">
        <div class="logo">
            <img src="assets/img/logo.png" alt="Mexicana Logo" />
        </div>
    </a>
    <input type="search" placeholder="Buscar" class="search-bar" />
</header>

<section class="reservations-panel">
    <h2>Mis Reservas</h2>
    <?php foreach ($reservations as $reservation): ?>
        <div class="reservation-card">
            <div class="reservation-header">
                <h3><?php echo $reservation['route']; ?></h3>
                <span class="reservation-status"><?php echo $reservation['status']; ?></span>
            </div>
            <div class="reservation-details">
                <p><strong>Fecha:</strong> <?php echo $reservation['date']; ?></p>
                <p><strong>Hora de Salida:</strong> <?php echo $reservation['departureTime']; ?></p>
                <p><strong>Hora de Llegada:</strong> <?php echo $reservation['arrivalTime']; ?></p>
                <p><strong>Número de Reserva:</strong> <?php echo $reservation['id']; ?></p>
            </div>
            <div class="reservation-actions">
                <button class="action-button" data-id="<?php echo $reservation['id']; ?>" data-action="view">Ver Detalles</button>
                <button class="action-button" data-id="<?php echo $reservation['id']; ?>" data-action="modify">Modificar</button>
                <button class="action-button cancel" data-id="<?php echo $reservation['id']; ?>" data-action="cancel">Cancelar</button>
            </div>
        </div>
    <?php endforeach; ?>
</section>