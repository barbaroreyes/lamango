import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
        <nav className="navigation">
        <Link to ='/'>Home</Link>
        <Link to ='/categorias'>Categorias</Link>
        <Link to ='/about'>About Us</Link>
        <Link to ='/contact'>Contacto</Link>

        
       


        </nav>
        {/* <div className="main">
            main
        </div> */}
        <footer>
            <div className="footer-item">anillos</div>
            <div className="footer-item">aretes</div>
            <div className="footer-item">cadenas</div>
            <div className="footer-item">cojuntos</div>
            <div className="footer-item">semanarios</div>
            <div className="footer-item">dijes</div>
            <div className="footer-item">tobillerras</div>
        </footer>
   
       
    
    </div>
  );
}

export default Home;
