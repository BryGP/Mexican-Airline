document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para el formulario de check-in
    const checkinForm = document.getElementById('checkinForm');
    if (checkinForm) {
        checkinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Check-in iniciado. En un escenario real, esto enviaría los datos al servidor.');
        });
    }

    // Funcionalidad para los botones de reserva
    const reservationButtons = document.querySelectorAll('.reservation-actions button');
    reservationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const reservationId = this.getAttribute('data-id');
            alert(`Acción ${action} para la reserva ${reservationId}`);
        });
    });

    // Funcionalidad para la página de detalles de vuelo
    const downloadBoardingPass = document.getElementById('downloadBoardingPass');
    const modifyReservation = document.getElementById('modifyReservation');
    if (downloadBoardingPass && modifyReservation) {
        downloadBoardingPass.addEventListener('click', function() {
            alert('Descargando pase de abordar...');
        });
        modifyReservation.addEventListener('click', function() {
            alert('Redirigiendo a la página de modificación de reserva...');
        });
    }

    // Funcionalidad para la página de cuenta
    const uploadPhoto = document.getElementById('upload-photo');
    const profileImage = document.getElementById('profileImage');
    if (uploadPhoto && profileImage) {
        uploadPhoto.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const personalInfoForm = document.getElementById('personalInfoForm');
    if (personalInfoForm) {
        personalInfoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Información personal actualizada');
        });
    }

    const preferencesForm = document.getElementById('preferencesForm');
    if (preferencesForm) {
        preferencesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Preferencias de viaje actualizadas');
        });
    }

    const changePasswordBtn = document.getElementById('changePasswordBtn');
    const travelHistoryBtn = document.getElementById('travelHistoryBtn');
    const paymentMethodsBtn = document.getElementById('paymentMethodsBtn');

    const changePasswordSection = document.getElementById('changePasswordSection');
    const travelHistorySection = document.getElementById('travelHistorySection');
    const paymentMethodsSection = document.getElementById('paymentMethodsSection');

    if (changePasswordBtn && travelHistoryBtn && paymentMethodsBtn) {
        changePasswordBtn.addEventListener('click', () => toggleSection(changePasswordSection));
        travelHistoryBtn.addEventListener('click', () => toggleSection(travelHistorySection));
        paymentMethodsBtn.addEventListener('click', () => toggleSection(paymentMethodsSection));
    }

    function toggleSection(section) {
        [changePasswordSection, travelHistorySection, paymentMethodsSection].forEach(s => {
            if (s === section) {
                s.style.display = s.style.display === 'none' ? 'block' : 'none';
            } else {
                s.style.display = 'none';
            }
        });
    }

    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Contraseña cambiada exitosamente');
        });
    }

    const paymentMethodForm = document.getElementById('paymentMethodForm');
    const paymentMethodSelect = document.getElementById('payment-method');
    const creditCardFields = document.getElementById('creditCardFields');

    if (paymentMethodForm && paymentMethodSelect && creditCardFields) {
        paymentMethodSelect.addEventListener('change', function() {
            creditCardFields.style.display = this.value === 'credit-card' ? 'block' : 'none';
        });

        paymentMethodForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Método de pago guardado');
        });
    }
});