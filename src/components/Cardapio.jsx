import React from 'react';
import '../styles/Cardapio.css'; // Certifique-se de ter um arquivo CSS para estilização

export default function Cardapio() {
    return (
        <section className="container-cardapio">
            <h2>Doces Finos 🍬✨</h2>
            <p>Nossos doces finos são produzidos com chocolates de alta qualidade, além de castanhas e frutas frescas selecionadas, para trazer sempre o melhor ao seu paladar e encantar a cada mordida! 🤩✨🤸‍♀️</p>
            
            <h3>Preço:</h3>
            <p><strong>R$ 210,00</strong> por cento, podendo ser dividido em até <strong>4 sabores</strong>.</p>

            <h3>Sabores Disponíveis:</h3>
            <ul className="sabores-list">
                <li>Camafeu</li>
                <li>Olho de Sogra</li>
                <li>Bala Baiana</li>
                <li>Crespinho de Damasco</li>
                <li>Caixinha com Creme de Cappuccino e Nozes</li>
                <li>Copinho Cherry</li>
                <li>Olho de Sogro (com Damasco)</li>
                <li>Docinho de Banana Passa</li>
                <li>Docinho Tropical (Cereja, Ameixa e Castanha do Pará)</li>
                <li>Docinho de Amêndoas</li>
                <li>Bombom de Cereja</li>
                <li>Caixinha de Chocolate Branco com Mousse de Maracujá</li>
                <li>Trufinhas de Vários Sabores</li>
                <li>Surpresinha de Uva</li>
                <li>Crespinho de Abacaxi</li>
                <li>Caixinha de Ninho com Geleia de Morango</li>
                <li>Bombom Laka Oreo e Nutella</li>
            </ul>

            <h3>Outras Delícias:</h3>
            <ul className="outras-delicias">
                <li>Mil Folhas de Doce de Leite com Cereja: <strong>R$ 220,00</strong></li>
                <li>Mil Folhas de Ninho com Uva: <strong>R$ 210,00</strong></li>
                <li>Morango no Chocolate: <strong>R$ 250,00</strong></li>
                <li>Caixinha de Frutas Vermelhas: <strong>R$ 210,00</strong></li>
                <li>Trufa de Pistache: <strong>R$ 350,00</strong></li>
                <li>Mini Brownie: <strong>R$ 250,00</strong></li>
                <li>Bombom de Morango: <strong>R$ 350,00</strong></li>
                <li>Brigadeiro de Pistache: <strong>R$ 300,00</strong></li>
                <li>Brigadeiro Belga: <strong>R$ 300,00</strong></li>
            </ul>
        </section>
    );
}