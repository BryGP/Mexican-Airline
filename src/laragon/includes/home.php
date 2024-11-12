<?php
$destinations = [
    ['id' => 1, 'name' => 'Guerrero - Acapulco', 'image' => 'assets/img/acapulco.jpg'],
    ['id' => 2, 'name' => 'Campeche - Campeche', 'image' => 'assets/img/campeche.jpg'],
    // ... Agrega el resto de los destinos aquí
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

<section class="flight-booking">
    <div class="background-image" style="background-image: url('assets/img/avionblanco.jpg');"></div>
    <div class="content">
        <h2>Planea tu viaje</h2>
        <form class="flight-form">
            <div class="form-group">
                <label for="origin">Origen</label>
                <input type="text" id="origin" placeholder="CDMX (MX)" />
            </div>
            <div class="form-group">
                <label for="destination">Destino</label>
                <input type="text" id="destination" placeholder="Italy (EUR)" />
            </div>
            <div class="form-group">
                <label for="date">¿Cuándo?</label>
                <input type="date" id="date" />
            </div>
            <button type="submit">Buscar</button>
        </form>
    </div>
</section>

<h2>Nuestros Destinos:</h2>

<section class="popular-destinations">
    <?php foreach ($destinations as $destination): ?>
        <div class="destination-card">
            <img src="<?php echo $destination['image']; ?>" alt="<?php echo $destination['name']; ?>" />
            <div class="content">
                <h3><?php echo $destination['name']; ?></h3>
            </div>
        </div>
    <?php endforeach; ?>
</section>

<section class="map-section">
    <h2 class="mapa">Conoce nuestro mapa:</h2>
    <div class="map-container">
        <img src="assets/img/mapa.png" alt="Mapa de destinos" class="map-img" />
    </div>
</section>