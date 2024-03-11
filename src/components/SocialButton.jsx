import React from 'react';
import { Button } from 'react-bootstrap';

const SocialButton = ({ icono }) => {
  return (
    <Button variant="btn btn-outline-dark">
      <i className={`fab ${icono}`}></i>
    </Button>
  );
};

export default SocialButton;
