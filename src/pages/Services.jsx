import { useNavigate } from 'react-router-dom';
import ServiceApi from '../api/ServiceApi';
import '../styles/Services.css';

export default function Services() {
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`); 
    };

    return (
        <ul className='list-gourmet'>
            {ServiceApi.length === 0 ? (
                <p>Nenhum produto disponível no momento.</p>
            ) : (
                ServiceApi.map((produto) => (
                    <li key={produto.id} onClick={() => handleEdit(produto.id)}>
                        <img src={produto.img} alt={produto.nome} />
                        <h3>{produto.nome}</h3>
                    </li>
                ))
            )}
        </ul>
    );
}
