import React, {useState} from 'react';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar los datos de registro al servidor
  };

  return (
    <div className="card">
      <div className="card-content">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div className="form-group">
            <label>Rescribir Contraseña:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};
