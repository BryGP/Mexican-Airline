<?php
// Simulación de datos de usuario (en un escenario real, estos datos vendrían de la base de datos)
$userInfo = [
    'name' => 'Juan Pérez',
    'email' => 'juan.perez@example.com',
    'phone' => '+52 1 234 567 8900',
    'address' => 'Calle Ejemplo 123, Ciudad de México, México',
    'memberSince' => 'Enero 2020',
    'memberLevel' => 'Oro',
    'points' => '50,000',
    'seatPreference' => 'window',
    'mealPreference' => 'regular'
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

<section class="account-panel">
    <h2>Mi Cuenta</h2>

    <div class="account-info">
        <div class="profile-picture">
            <img src="assets/img/usr1.png" alt="Perfil" class="profile-image" id="profileImage" />
            <input
                type="file"
                accept="image/*"
                id="upload-photo"
                class="file-input"
                style="display: none;"
            />
            <label for="upload-photo" class="change-photo">Cambiar foto</label>
        </div>

        <div class="user-details">
            <h3><?php echo $userInfo['name']; ?></h3>
            <p>Miembro desde: <?php echo $userInfo['memberSince']; ?></p>
            <p>Nivel de Socio: <?php echo $userInfo['memberLevel']; ?></p>
            <p>Puntos acumulados: <?php echo $userInfo['points']; ?></p>
        </div>
    </div>

    <div class="account-sections">
        <div class="section">
            <h3>Información Personal</h3>

            <form class="account-form" id="personalInfoForm">
                <div class="form-group">
                    <label for="name">Nombre Completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value="<?php echo $userInfo['name']; ?>"
                    />
                </div>

                <div class="form-group">
                    <label for="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value="<?php echo $userInfo['email']; ?>"
                    />
                </div>

                <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value="<?php echo $userInfo['phone']; ?>"
                    />
                </div>

                <div class="form-group">
                    <label for="address">Dirección</label>
                    <textarea
                        id="address"
                        name="address"
                    ><?php echo $userInfo['address']; ?></textarea>
                </div>
                <button type="submit" class="save-button">Guardar Cambios</button>
            </form>
        </div>

        <div class="section">
            <h3>Preferencias de Viaje</h3>
            <form class="preferences-form" id="preferencesForm">
                <div class="form-group">
                    <label for="seat-preference">Preferencia de Asiento</label>
                    <select
                        id="seat-preference"
                        name="seatPreference"
                    >
                        <option value="window" <?php echo $userInfo['seatPreference'] == 'window' ? 'selected' : ''; ?>>Ventana</option>
                        <option value="aisle" <?php echo $userInfo['seatPreference'] == 'aisle' ? 'selected' : ''; ?>>Pasillo</option>
                        <option value="middle" <?php echo $userInfo['seatPreference'] == 'middle' ? 'selected' : ''; ?>>Centro</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="meal-preference">Preferencia de Comida</label>
                    <select
                        id="meal-preference"
                        name="mealPreference"
                    >
                        <option value="regular" <?php echo $userInfo['mealPreference'] == 'regular' ? 'selected' : ''; ?>>Regular</option>
                        <option value="vegetarian" <?php echo $userInfo['mealPreference'] == 'vegetarian' ? 'selected' : ''; ?>>Vegetariana</option>
                        <option value="vegan" <?php echo $userInfo['mealPreference'] == 'vegan' ? 'selected' : ''; ?>>Vegana</option>
                        <option value="kosher" <?php echo $userInfo['mealPreference'] == 'kosher' ? 'selected' : ''; ?>>Kosher</option>
                    </select>
                </div>
                <button type="submit" class="save-button">Guardar Preferencias</button>
            </form>
        </div>
    </div>

    <div class="account-actions">
        <button class="action-button" id="changePasswordBtn">Cambiar Contraseña</button>
        <button class="action-button" id="travelHistoryBtn">Historial de Viajes</button>
        <button class="action-button" id="paymentMethodsBtn">Gestionar Métodos de Pago</button>
    </div>

    <div id="changePasswordSection" class="toggle-content" style="display: none;">
        <h3>Cambiar Contraseña</h3>
        <form id="changePasswordForm">
            <div class="form-group">
                <label for="new-password">Nueva Contraseña</label>
                <input type="password" id="new-password" name="new-password" required />
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirmar Contraseña</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
            </div>
            <button type="submit" class="save-button">Guardar Cambios</button>
        </form>
    </div>

    <div id="travelHistorySection" class="toggle-content" style="display: none;">
        <h3>Historial de Viajes</h3>
        <p>Aquí puedes ver tu historial de viajes...</p>
        <!-- Aquí se podría agregar una tabla o lista con el historial de viajes -->
    </div>

    <div id="paymentMethodsSection" class="toggle-content" style="display: none;">
        <h3>Gestionar Métodos de Pago</h3>
        <form id="paymentMethodForm">
            <div class="form-group">
                <label for="payment-method">Método de Pago</label>
                <select id="payment-method" name="paymentMethod">
                    <option value="cash">Efectivo</option>
                    <option value="credit-card">Tarjeta de Crédito o Débito</option>
                </select>
            </div>
            <div id="creditCardFields" style="display: none;">
                <div class="form-group">
                    <label for="card-number">Número de Tarjeta</label>
                    <input type="text" id="card-number" name="cardNumber" placeholder="4152 3138 5487 3289" />
                </div>
                <div class="form-group">
                    <label for="expiry-date">Fecha de Expiración</label>
                    <input type="text" id="expiry-date" name="expiryDate" placeholder="MM/AA" />
                </div>
                <div class="form-group">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" />
                </div>
            </div>
            <button type="submit" class="save-button">Guardar Método de Pago</button>
        </form>
    </div>
</section>