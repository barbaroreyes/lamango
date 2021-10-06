import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="home">
        <nav className="navigation">
        <Link to ='/'>Home</Link>
        <Link to ='/'>Home</Link>
        <Link to ='/'>Home</Link>
        <Link to ='/'>Home</Link>


        </nav>
        <div className="main">
            main
        </div>
        <footer>
            <div className="footer-item">1</div>
            <div className="footer-item">2</div>
            <div className="footer-item">2</div>
            <div className="footer-item">1</div>
            <div className="footer-item">2</div>
            <div className="footer-item">2</div>
        </footer>
   
       
    
    </div>
  );
}

export default Home;
