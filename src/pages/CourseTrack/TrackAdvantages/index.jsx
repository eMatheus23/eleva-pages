import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const TrackAdvantages = () => {
  return (
    <section className="track-advantages">
      <ul>
        <li>
          • Com a trilha VENDAS E INSUMOS AGRÍCOLAS você tem uma visão completa
          sobre o tema.
        </li>
        <li>• São 7 cursos pensados que permeiam o tema. </li>
        <li>
          • Adquirindo a trilha completa poupa 40% do valor total das trilhas.
          Em torno de R$450,00.
        </li>
        <li>• Materiais disponíveis para download </li>
        <li>
          <p>
            • Associados Premium têm + 20% de desconto nesta Trilha de Ensino.
            <br />
            Clique
            <Link to="/plans"> aqui</Link>
            <> e Seja Premium para aproveitar este desconto!</>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default TrackAdvantages;
