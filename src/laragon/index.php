<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'home';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mexicana Airlines</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <?php include 'includes/sidebar.php'; ?>
    
    <main class="main-content">
        <?php
        switch ($page) {
            case 'home':
                include 'includes/home.php';
                break;
            case 'vuelos':
                include 'includes/vuelos.php';
                break;
            case 'settings':
                include 'includes/settings.php';
                break;
            case 'checkin':
                include 'includes/checkin.php';
                break;
            case 'reservations':
                include 'includes/reservations.php';
                break;
            case 'details':
                include 'includes/details.php';
                break;
            case 'account':
                include 'includes/account.php';
                break;
            default:
                include 'includes/home.php';
        }
        ?>
    </main>

    <script src="js/script.js"></script>
</body>
</html>