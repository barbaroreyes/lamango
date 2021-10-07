import React from 'react';
import NavigationMovil from './navigation-movil';
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
        <nav className="navigation">
         <NavigationMovil/>
        {/* <Link to ='/'>Home</Link>
        <Link to ='/categorias'>Categorias</Link>
        <Link to ='/about'>About Us</Link>
        <Link to ='/contact'>Contacto</Link> */}
        </nav>
    </div>
  );
}

export default Navigation;
