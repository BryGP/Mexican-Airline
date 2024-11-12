<header>
    <a href="index.php" class="logo-link">
        <div class="logo">
            <img src="assets/img/logo.png" alt="Mexicana Logo" />
        </div>
    </a>
    <input type="search" placeholder="Buscar" class="search-bar" />
</header>

<section class="checkin-panel">
    <h2>Check-In Online</h2>
    <form class="checkin-form" id="checkinForm">
        <div class="form-group">
            <label for="booking-reference">Referencia de Reserva</label>
            <input
                type="text"
                id="booking-reference"
                name="booking-reference"
                placeholder="Ej. ABC123"
                required
            />
        </div>
        <div class="form-group">
            <label for="last-name">Apellido</label>
            <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Ingrese su apellido"
                required
            />
        </div>
        <button type="submit" class="checkin-button">Iniciar Check-In</button>
    </form>
    <div class="checkin-info">
        <h3>Información Importante</h3>
        <ul>
            <li>El check-in online está disponible desde 24 horas hasta 1 hora antes de la salida del vuelo.</li>
            <li>Asegúrese de tener a mano su pasaporte o identificación válida.</li>
            <li>Si viaja con equipaje especial, por favor contacte a nuestro servicio al cliente.</li>
        </ul>
    </div>
</section>