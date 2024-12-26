import { useParams, Link } from 'react-router-dom';
import ServiceApi from '../api/ServiceApi';
import '../styles/Opened.css';
import Footer from '../components/Footer';
import Cardapio from '../components/Cardapio';

export default function Opened() {
    const { id } = useParams();
    const produto = ServiceApi.find(p => p.id === parseInt(id));

    if (!produto) {
        return <p>Produto não encontrado. Volte para a lista de doces.</p>;
    }

    return (
        <section className="opened">
                <img src={produto.img} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
            <Cardapio />
            <div className="container-voltar">
                <Link to="/">Voltar</Link>
            </div>
            <Footer />
        </section>
    );
}

