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
                                    <h2 className="foot-nav-text-title">Social Networks</h2>  
                                </div> 
                                <div className="social-images">
                                    <div className="social">
                                <img src={logofacebook} alt="Imagen facebook" style={{ width: "50px" }}></img>
                                <img src={logoinstagram} alt="Imagen instagram" style={{ width: "50px" }}></img>
                                
                            </div>
                            </div>
                        </div>
                        <nav className="foot-navbar"> 
                            <ul>
                                <li className="foot-nav-text-title">Navigate</li>
                                <li className='link'><Link to="/"> Home</Link></li>
                                <li className='link'><Link to="/cities"> Cities</Link></li>
                            </ul>
                        </nav>

                        <article className="foot-articles">
                            <ul>
                                <li className="foot-nav-text-title">Contact us:</li>
                                
                                <p className='contacto'>MyTineraries@gmail.com</p>
                                <p className='contacto'>Number: +54 785-547854</p>
                            </ul>
                        </article>  
                </div>
                <div className="foot-copy"> Copyright &copy; - MYTINERARY All Rights Reserved. </div>
            </footer>
    </section>
    )
}

export default Footer