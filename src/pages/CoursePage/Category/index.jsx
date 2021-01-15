import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const Category = ({ course }) => {
  const { authors } = course;

  return (
    <section id="category">
      <p>
        Este é um curso da categoria rápido.
        <br />
        Possui 18h de vídeo.
      </p>

      <p className="recomended">Indicado para:</p>
      <p>Você que quer identificar os GAPs de produtividade nas lavouras;</p>
      <p>
        Para você que quer analisar o desenvolvimento dos estádios fenológicos;
      </p>
      <p>
        Para você que quer compreender a interação planta-ambiente-solo visando
        potencializar o uso de recursos no cultivo;
      </p>
      <p>
        Para você que quer saber como trabalhar os pilares fundamentais das
        lavouras para alcançar altas produtividades.
      </p>

      <h4>Com quem você vai aprender:</h4>

      <div className="authors">
        {authors.map(author => (
          <div className="author" key={author.id}>
            <img src={author.avatar_url} alt={author.name} />
            <p>{author.name}</p>
            <Link to={author.profile_url}>Sobre</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

Category.propTypes = {
  course: PropTypes.shape({
    authors: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Category;
