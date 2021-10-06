import React from 'react';
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
        <nav className="navigation">
        <Link to ='/'>Home</Link>
        <Link to ='/categorias'>Categorias</Link>
        <Link to ='/about'>About Us</Link>
        <Link to ='/contact'>Contacto</Link>

        
       


        </nav>
    </div>
  );
}

export default Navigation;
