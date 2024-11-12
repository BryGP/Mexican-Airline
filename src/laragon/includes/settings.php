<header>
    <a href="index.php" class="logo-link">
        <div class="logo">
            <img src="assets/img/logo.png" alt="Mexicana Logo" />
        </div>
    </a>
    <input type="search" placeholder="Buscar" class="search-bar" />
</header>

<section class="settings-panel">
    <h2>Configuración General del Sitio</h2>
    <form class="settings-form">
        <div class="form-group">
            <label for="site-language">Idioma del Sitio</label>
            <select id="site-language" name="site-language">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </div>
        <div class="form-group">
            <label for="default-currency">Moneda Predeterminada</label>
            <select id="default-currency" name="default-currency">
                <option value="MXN">Peso Mexicano (MXN)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
            </select>
        </div>
        <div class="form-group">
            <label for="time-format">Formato de Hora</label>
            <select id="time-format" name="time-format">
                <option value="24">24 horas</option>
                <option value="12">12 horas (AM/PM)</option>
            </select>
        </div>
        <div class="form-group">
            <label for="date-format">Formato de Fecha</label>
            <select id="date-format" name="date-format">
                <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </select>
        </div>
        <div class="form-group">
            <label for="site-theme">Tema del Sitio</label>
            <select id="site-theme" name="site-theme">
                <option value="light">Claro</option>
                <option value="dark">Oscuro</option>
                <option value="auto">Automático (según sistema)</option>
            </select>
        </div>
        <div class="form-group">
            <label for="accessibility">Opciones de Accesibilidad</label>
            <div class="checkbox-group">
                <input type="checkbox" id="high-contrast" name="high-contrast" />
                <label for="high-contrast">Alto contraste</label>
            </div>
            <div class="checkbox-group">
                <input type="checkbox" id="larger-text" name="larger-text" />
                <label for="larger-text">Texto más grande</label>
            </div>
        </div>
        <button type="submit" class="save-button">Guardar Cambios</button>
    </form>
</section>