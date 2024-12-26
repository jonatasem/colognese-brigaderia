import '../styles/Home.css';
import Services from '../pages/Services';
import imgLogo from '../assets/img/logo.png';
import Footer from '../components/Footer';

import imgWhats from '../assets/svg/whatsapp-whats-app-svgrepo-com.svg'
import imgInsta from '../assets/svg/insta.svg'
import imgLocation from '../assets/svg/location-marker-svgrepo-com.svg'



export default function Home() {
    return (
        <section className="container-home">
            <div className="banner">
                <div className="logo-container">
                    <img className='logo' src={imgLogo} alt="logo" />
                </div>
                <p>Descubra nossos doces artesanais feitos com amor.</p>
            </div>
            <nav className='rede-social-home'>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/pedro.colognese?igsh=MTIzcmliMTRkMzZyMA==">
                            <img src={imgInsta} alt="" />
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5518998146365">
                            <img src={imgWhats} alt="" />
                            WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={imgLocation} alt="" />
                            Endereço
                        </a>
                    </li>
                </ul>
            </nav>
            <Services />
            <Footer />
        </section>
    );
}
