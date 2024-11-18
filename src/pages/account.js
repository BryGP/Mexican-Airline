import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/img/logo.png';
import '../styles/account.css';
import profilePlaceholder from '../assets/img/usr1.png';

function Account() {
  // Estados base
  const [profilePhoto, setProfilePhoto] = useState(profilePlaceholder);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [showTravelHistory, setShowTravelHistory] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Estado para la información del usuario
  const [userInfo, setUserInfo] = useState({
    id: 1,
    name: '',
    email: '',
    phone: '',
    address: '',
    seatPreference: 'window',
    mealPreference: 'regular',
    memberSince: '',
    memberLevel: '',
    points: 0
  });

  // Cargar datos del usuario desde la base de datos
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost/mexicana-airline/apis/account.php?usuario=${userInfo.id}`);
        if (response.data) {
          setUserInfo(prevInfo => ({
            ...prevInfo,
            name: response.data.nombre,
            email: response.data.email,
            memberSince: response.data.fecha_registro
          }));
        }
      } catch (err) {
        setError('Error al cargar los datos del usuario');
        console.error('Error:', err);
      }
    };

    fetchUserData();
  }, [userInfo.id]);

  // Manejar cambio de foto
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
        // Aquí podrías enviar la foto al servidor
        uploadProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Subir foto al servidor
  const uploadProfilePhoto = async (photoData) => {
    try {
      await axios.post('http://localhost/mexicana-airline/apis/account.php', {
        usuario_id: userInfo.id,
        action: 'update_photo',
        photo: photoData
      });
    } catch (err) {
      console.error('Error al subir la foto:', err);
    }
  };

  // Manejar cambios en el formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  // Guardar información personal
  const handlePersonalInfoSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost/mexicana-airline/apis/account.php', {
        action: 'update_info',
        usuario_id: userInfo.id,
        nombre: userInfo.name,
        email: userInfo.email,
        telefono: userInfo.phone,
        direccion: userInfo.address
      });

      if (response.data.success) {
        alert('Información actualizada correctamente');
      }
    } catch (err) {
      setError('Error al guardar los cambios');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Guardar preferencias
  const handlePreferencesSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost/mexicana-airline/apis/account.php', {
        action: 'update_preferences',
        usuario_id: userInfo.id,
        preferencias: {
          asiento: userInfo.seatPreference,
          comida: userInfo.mealPreference
        }
      });

      if (response.data.success) {
        alert('Preferencias actualizadas correctamente');
      }
    } catch (err) {
      setError('Error al guardar las preferencias');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Cambiar contraseña
  const handlePasswordChange = async (event) => {
    event.preventDefault();
    const newPassword = event.target['new-password'].value;
    const confirmPassword = event.target['confirm-password'].value;

    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.post('http://localhost/mexicana-airline/apis/account.php', {
        action: 'change_password',
        usuario_id: userInfo.id,
        new_password: newPassword
      });

      if (response.data.success) {
        alert('Contraseña actualizada correctamente');
        setShowPasswordChange(false);
      }
    } catch (err) {
      setError('Error al cambiar la contraseña');
      console.error('Error:', err);
    }
  };

  // Toggle secciones
  const toggleSection = (section) => {
    setShowPasswordChange(section === 'password');
    setShowTravelHistory(section === 'history');
    setShowPaymentMethods(section === 'payment');
  };

  // Manejar cambio de método de pago
  const handlePaymentMethodChange = (event) => { setPaymentMethod(event.target.value); };

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

      {error && (
        <div className="error-message" style={{ color: 'red', padding: '1rem' }}>
          {error}
        </div>
      )}

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
            <h3>{userInfo.name || 'Usuario'}</h3>
            <p>Miembro desde: {userInfo.memberSince || 'Enero 2020'}</p>
            <p>Nivel de Socio: {userInfo.memberLevel || 'Oro'}</p>
            <p>Puntos acumulados: {userInfo.points || '50,000'}</p>
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
                  required
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
                  required
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
              <button type="submit" className="save-button" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </form>
          </div>

          <div className="section">
            <h3>Preferencias de Viaje</h3>
            <form className="account-form" onSubmit={handlePreferencesSubmit}>
              <div className="form-group">
                <label htmlFor="seatPreference">Preferencia de Asiento</label>
                <select
                  id="seatPreference"
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
                <label htmlFor="mealPreference">Preferencia de Comida</label>
                <select
                  id="mealPreference"
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

              <button type="submit" className="save-button" disabled={loading}>
                {loading ? 'Guardando...' : 'Guardar Preferencias'}
              </button>
            </form>
          </div>

          <div className="section">
            <h3>Seguridad</h3>
            <button onClick={() => toggleSection('password')} className="toggle-button">
              Cambiar Contraseña
            </button>
            {showPasswordChange && (
              <form onSubmit={handlePasswordChange} className="password-form">
                <div className="form-group">
                  <label htmlFor="new-password">Nueva Contraseña</label>
                  <input type="password" id="new-password" name="new-password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirmar Contraseña</label>
                  <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" className="save-button">Cambiar Contraseña</button>
              </form>
            )}
          </div>

          <div className="section">
            <h3>Historial de Viajes</h3>
            <button onClick={() => toggleSection('history')} className="toggle-button">
              Ver Historial
            </button>
            {showTravelHistory && (
              <div className="travel-history">
                {/* Aquí iría la lógica para mostrar el historial de viajes */}
                <p>Historial de viajes no disponible en este momento.</p>
              </div>
            )}
          </div>

          <div className="section">
            <h3>Métodos de Pago</h3>
            <button onClick={() => toggleSection('payment')} className="toggle-button">
              Gestionar Métodos de Pago
            </button>
            {showPaymentMethods && (
              <div className="payment-methods">
                <form>
                  <div className="form-group">
                    <label htmlFor="payment-method">Seleccionar método de pago</label>
                    <select
                      id="payment-method"
                      value={paymentMethod}
                      onChange={handlePaymentMethodChange}
                    >
                      <option value="">Seleccione un método</option>
                      <option value="credit-card">Tarjeta de Crédito</option>
                      <option value="debit-card">Tarjeta de Débito</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>
                  {/* Aquí irían más campos según el método de pago seleccionado */}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Account;