import React from 'react';
import { Alert } from 'react-bootstrap';

const RegistroAlert = ({ mensaje, tipo }) => {
  return (
    <>
      {mensaje && <Alert variant={tipo}>{mensaje}</Alert>}
    </>
  );
};

export default RegistroAlert;

    