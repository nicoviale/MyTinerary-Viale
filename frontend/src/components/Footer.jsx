import React from 'react';
import { Link } from 'react-router-dom'

import logofacebook from '../images/facebook.png';
import logoinstagram from '../images/instagram.png';


import '../styles/styles.css'


const Footer = () => {
    return (
        <section className="footer-section">
            <footer>
                <div className="foot-tools">
                        <div className="social-container">
                                <div className="social-text"> 
                                    <h2 className="socialnet">Social Networks</h2>  
                                </div> 
                                <div className="social-images">
                                    <div className="social">
                                <img src={logofacebook} alt="Imagen facebook" style={{ width: "50px" }}></img>
                                <img src={logoinstagram} alt="Imagen instagram" style={{ width: "50px" }}></img>
                                
                            </div>
                            </div>
                        </div>
                        <nav className="foot-navbar"> 
                            
                                <h2 className="navigate">Navigate</h2>
                                <div className='link'>
                                <li ><Link to="/"> Home</Link></li>
                                <li ><Link to="/cities"> Cities</Link></li>
                                </div>
                        </nav>

                        <article className="foot-articles">
                            
                                <h2 className="titulos-footer">Contact us:</h2>
                                
                                <p className='contacto'>MyTineraries@gmail.com</p>
                                <p className='contacto'>Number: +54 785-547854</p>
                            
                        </article>  
                </div>
                <div className="foot-copy"> Copyright &copy; - MYTINERARY All Rights Reserved. </div>
            </footer>
    </section>
    )
}

export default Footer