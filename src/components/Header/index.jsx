import React from 'react';
import camera from './camera.svg';
import './style.css';

const Header = () => {
  return (
    <>
      <h3>
        <img className="logo" src={camera} alt="Logo" />
        V našem kině právě uvádíme
      </h3>
    </>
  )
};
  
export default Header;