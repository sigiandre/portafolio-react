import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Sigi Andre</h1>
                <p>Trujillo - Lima - Peru</p>
            </div>
            <div className="footer-contact">
                <h3>Contactame</h3>
                <p>Y pongámonos manos a la obra</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    Diseñado por Sigi Andre
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/sigi-andre-diaz-quiroz-6a1b3175/" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://twitter.com/SigiAndreDiaz" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/andre.diazquiroz" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/andre_diazq/" target="_blank" rel="noreferrer">
                        <i class="fab fa-instagram instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
