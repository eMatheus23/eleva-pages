import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const AdvantagesComponent = ({ track }) => {
  const { courses, discount, discount_for_premium } = track;

  return (
    <section className="track-advantages">
      <ul>
        <li>
          • Com a trilha VENDAS E INSUMOS AGRÍCOLAS você tem uma visão completa
          sobre o tema.
        </li>
        <li>
          <>• São </>
          {courses.length}
          <> cursos pensados que permeiam o tema.</>
        </li>
        <li>
          <>• Adquirindo a trilha completa poupa </>
          {Math.floor((discount / 1) * 100)}
          <>% do valor total das trilhas. Em torno de R$450,00.</>
        </li>
        <li>• Materiais disponíveis para download </li>
        <li>
          <p>
            <>• Associados Premium têm + </>
            {Math.floor((discount_for_premium / 1) * 100)}
            <>% de desconto nesta Trilha de Ensino.</>
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

export default AdvantagesComponent;
