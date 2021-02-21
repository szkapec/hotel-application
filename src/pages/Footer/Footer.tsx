import React from 'react'
import '../../sass/style/Footer/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="site-footer">
                <div className="contact">
                    <div className="test"><i className="fas fa-file-alt"></i> Aplikacja testowa</div>
                    <div className="github"><i className="fab fa-github"></i> <a href="https://github.com/szkapec">Zapraszam na mojego Githuba!</a> </div>
                    <span className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-tripadvisor"></i>
                        <i className="fab fa-pinterest-p"></i>
                    </span>
                    <div className="rights-reserved">
                        Mateusz Kaproń © 2021
                    </div>
                </div>
                <div className="address">
                    <div> <i className="fas fa-map-marker-alt"></i> <span>ADRES</span> <br /> Lublin 20-200, Polska</div>
                    <div><i className="fas fa-phone-alt"></i> <span>TELEFON</span> <br /> <a href="tel:+48661360889">+48 661 360 889</a> </div>
                    <div><i className="far fa-envelope"></i> <span>MAIL</span> <br /> <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmail.com</a></div>
                </div>
                <div className="navigate">
                    <button className="btn"> <a href="https://www.google.com/maps/place/Lublin/@51.2180881,22.4937309,12z/data=!3m1!4b1!4m5!3m4!1s0x472257141e154061:0x5528ee7af6e8e95f!8m2!3d51.2464536!4d22.5684463?hl=PL">WYZNACZ TRASĘ</a> <i className="fas fa-location-arrow"></i></button>
                    <div className="rights-reserved-response">
                        Mateusz Kaproń © 2021
            </div>
                </div>


            </div>
        </footer>

    )
}

export default Footer;
