import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost/mexicana/api/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Guardar información del usuario en el estado global o localStorage
                    localStorage.setItem('user', JSON.stringify(data.user));
                    navigate('/'); // Redirigir a la página principal
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
            />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login;