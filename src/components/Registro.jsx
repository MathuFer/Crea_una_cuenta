import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
  const [mensaje, setMensaje] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('');

  const handleRegistroExitoso = (mensaje) => {
    setMensaje(mensaje);
    setTipoAlerta('success');
  };

  const handleRegistroFallido = (mensaje) => {
    setMensaje(mensaje);
    setTipoAlerta('danger');
  };

  return (
    <div>
        <h1>Crea una cuenta</h1>
      <SocialButton icono="fa-facebook-f" /> {/* Icono de Facebook */}
      <SocialButton icono="fa-github" /> {/* Icono de GitHub */}
      <SocialButton icono="fa-linkedin-in" /> {/* Icono de LinkedIn */}
        <p>O usa tu email para registrarte</p>
      <Formulario onRegistroExitoso={handleRegistroExitoso} onRegistroFallido={handleRegistroFallido} />
      <br />
      <Alert mensaje={mensaje} tipo={tipoAlerta} />
    </div>
  );
};

export default Registro;
