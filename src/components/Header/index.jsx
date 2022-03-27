import React from 'react';
import './style.css';
import camera from './img/camera.svg';

const Header =() => {
  return ( 
  <header class="header">
		<h1>
      <img class="logo" src={camera} alt="Logo" />
      V našem kině právě uvádíme
    </h1>
		</header>
  );
}
export default Header;