import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../styles/account.css';
import profilePlaceholder from '../assets/img/usr1.png';

function Account() {

    // Estados para mostrar u ocultar secciones de pago
    const [showPasswordChange, setShowPasswordChange] = useState(false);
    const [showTravelHistory, setShowTravelHistory] = useState(false);
    const [showPaymentMethods, setShowPaymentMethods] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    // Función para manejar el cambio de método de pago
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    // Función para mostrar u ocultar secciones de usuario
    const toggleSection = (section) => {
        if (section === 'password') {
            setShowPasswordChange(!showPasswordChange);
            setShowTravelHistory(false);
            setShowPaymentMethods(false);
        } else if (section === 'history') {
            setShowTravelHistory(!showTravelHistory);
            setShowPasswordChange(false);
            setShowPaymentMethods(false);
        } else if (section === 'payment') {
            setShowPaymentMethods(!showPaymentMethods);
            setShowPasswordChange(false);
            setShowTravelHistory(false);
        }
    };

    // Estado para la foto de perfil
    const [profilePhoto, setProfilePhoto] = useState(profilePlaceholder);

    // Estado para la información personal
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        seatPreference: 'window',
        mealPreference: 'regular',
    });

    // Cargar datos de Local Storage al montar el componente
    useEffect(() => {
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (storedUserInfo) {
            setUserInfo(storedUserInfo);
        }
        const storedProfilePhoto = localStorage.getItem('profilePhoto');
        if (storedProfilePhoto) {
            setProfilePhoto(storedProfilePhoto);
        }
    }, []);

    // Cambio de foto
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhoto(reader.result); // Actualiza la foto de perfil con la nueva imagen
                localStorage.setItem('profilePhoto', reader.result); // Guarda la nueva foto en Local Storage
            };
            reader.readAsDataURL(file);
        }
    };

    // Guardar cambios en el formulario
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    // Función para manejar el envío de información personal
    const handlePersonalInfoSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userInfo', JSON.stringify(userInfo)); // Guarda la información en Local Storage
        console.log("Información personal guardada:", userInfo);
    };

    // Función para manejar el envío de preferencias
    const handlePreferencesSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('userInfo', JSON.stringify(userInfo)); // Guarda las preferencias en Local Storage
        console.log("Preferencias de viaje guardadas:", {
            seatPreference: userInfo.seatPreference,
            mealPreference: userInfo.mealPreference,
        });
    };

    return (
        <main className="main-content">
            <header>
                <Link to="/" className="logo-link">
                    <div className="logo">
                        <img src={logo} alt="Mexicana Logo" />
                    </div>
                </Link>
                <input type="search" placeholder="Buscar" className="search-bar" />
            </header>

            <section className="account-panel">
                <h2>Mi Cuenta</h2>

                <div className="account-info">
                    <div className="profile-picture">
                        <img src={profilePhoto} alt="Perfil" className="profile-image" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="file-input"
                            style={{ display: 'none' }}
                            id="upload-photo"
                        />
                        <label htmlFor="upload-photo" className="change-photo">Cambiar foto</label>
                    </div>

                    <div className="user-details">
                        <h3>{userInfo.name || 'Juan Pérez'}</h3>
                        <p>Miembro desde: Enero 2020</p>
                        <p>Nivel de Socio: Oro</p>
                        <p>Puntos acumulados: 50,000</p>
                    </div>
                </div>

                <div className="account-sections">
                    <div className="section">
                        <h3>Información Personal</h3>

                        <form className="account-form" onSubmit={handlePersonalInfoSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userInfo.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userInfo.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={userInfo.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Dirección</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={userInfo.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button type="submit" className="save-button">Guardar Cambios</button>
                        </form>
                    </div>

                    <div className="section">
                        <h3>Preferencias de Viaje</h3>
                        <form className="preferences-form" onSubmit={handlePreferencesSubmit}>
                            <div className="form-group">
                                <label htmlFor="seat-preference">Preferencia de Asiento</label>
                                <select
                                    id="seat-preference"
                                    name="seatPreference"
                                    value={userInfo.seatPreference}
                                    onChange={handleInputChange}
                                >
                                    <option value="window">Ventana</option>
                                    <option value="aisle">Pasillo</option>
                                    <option value="middle">Centro</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="meal-preference">Preferencia de Comida</label>
                                <select
                                    id="meal-preference"
                                    name="mealPreference"
                                    value={userInfo.mealPreference}
                                    onChange={handleInputChange}
                                >
                                    <option value="regular">Regular</option>
                                    <option value="vegetarian">Vegetariana</option>
                                    <option value="vegan">Vegana</option>
                                    <option value="kosher">Kosher</option>
                                </select>
                            </div>
                            <button type="submit" className="save-button">Guardar Preferencias</button>
                        </form>
                    </div>
                </div>

                {/* Acciones de los botones (Despliegue) */}
                <div className="account-actions">
                    <button className="action-button" onClick={() => toggleSection('password')}>
                        Cambiar Contraseña
                    </button>
                    <button className="action-button" onClick={() => toggleSection('history')}>
                        Historial de Viajes
                    </button>
                    <button className="action-button" onClick={() => toggleSection('payment')}>
                        Gestionar Métodos de Pago
                    </button>
                </div>

                {/* Contenido desplegable para Cambiar Contraseña */}
                {showPasswordChange && (
                    <div className="toggle-content">
                        <h3>Cambiar Contraseña</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="new-password">Nueva Contraseña</label>
                                <input type="password" id="new-password" name="new-password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirmar Contraseña</label>
                                <input type="password" id="confirm-password" name="confirm-password" />
                            </div>
                            <button type="submit" className="save-button">Guardar Cambios</button>
                        </form>
                    </div>
                )}

                {/* Contenido desplegable para Historial de Viajes */}
                {showTravelHistory && (
                    <div className="toggle-content">
                        <h3>Historial de Viajes</h3>
                        <p>Aquí puedes ver tu historial de viajes...</p>
                    </div>
                )}

                {/* Contenido desplegable para Gestionar Métodos de Pago */}
                {showPaymentMethods && (
                    <div className="toggle-content">
                        <h3>Gestionar Métodos de Pago</h3>

                        <form>
                            <div className="form-group">
                                <label htmlFor="payment-method">Método de Pago</label>
                                <select id="payment-method" name="paymentMethod" onChange={handlePaymentMethodChange}>
                                    <option value="cash">Efectivo</option>
                                    <option value="credit-card">Tarjeta de Crédito o Débito</option>
                                </select>
                            </div>

                            {paymentMethod === 'credit-card' && (
                                <>
                                    <div className="form-group">
                                        <label htmlFor="card-number">Número de Tarjeta</label>
                                        <input type="text" id="card-number" name="cardNumber" placeholder="4152 3138 5487 3289" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="expiry-date">Fecha de Expiración</label>
                                        <input type="text" id="expiry-date" name="expiryDate" placeholder="MM/AA" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="cvv">CVV</label>
                                        <input type="text" id="cvv" name="cvv" />
                                    </div>
                                </>
                            )}
                            <button type="submit" className="save-button">Guardar Método de Pago</button>
                        </form>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Account;