import '../styles/Header.css';

export default function Header() {
    return (
        <header className="container-header">
            <h1>Confeitaria Elegante</h1>
            <nav className='nav-bar'>
                <ul>
                    <li>Início</li>
                    <li>Sobre Nós</li>
                    <li>Menu</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    );
}
