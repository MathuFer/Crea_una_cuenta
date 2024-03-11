import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ onRegistroExitoso, onRegistroFallido }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmarContraseña: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.contraseña && formData.confirmarContraseña) {
      if (formData.contraseña === formData.confirmarContraseña) {
        onRegistroExitoso('Registro exitoso');
      } else {
        onRegistroFallido('Las contraseñas no coinciden');
      }
    } else {
      onRegistroFallido('Por favor, complete todos los campos');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre">
        <Form.Label></Form.Label>
        <Form.Control placeholder='Nombre' type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label></Form.Label>
        <Form.Control placeholder='Email:' type="email" name="email" value={formData.email} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="contraseña">
        <Form.Label></Form.Label>
        <Form.Control placeholder='Contraseña' type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="confirmarContraseña">
        <Form.Label></Form.Label>
        <Form.Control placeholder='Confirmar Contraseña' type="password" name="confirmarContraseña" value={formData.confirmarContraseña} onChange={handleChange} />
      </Form.Group>
      <br />
      <Button variant="btn btn-success" type="submit">Registrarse</Button>
    </Form>
  );
};

export default Formulario;
