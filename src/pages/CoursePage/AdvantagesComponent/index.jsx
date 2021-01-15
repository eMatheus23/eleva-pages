import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const AdvantagesComponent = ({ course }) => {
  const { advantages, discount_for_premium, authors } = course;

  return (
    <section id="course-page-advantages">
      <ul>
        <li>
          <p>
            <>Associados Premium têm + </>
            {Math.floor((discount_for_premium / 1) * 100)}
            <>% de desconto no curso.</>
            <br />
            Clique
            <Link to="/plans"> aqui</Link>
            <> e Seja Premium para aproveitar este desconto!</>
          </p>
        </li>
        {advantages.map((advantage, key) => (
          <li key={key}>
            <p>{advantage}</p>
          </li>
        ))}
      </ul>

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

AdvantagesComponent.propTypes = {
  course: PropTypes.shape({
    advantages: PropTypes.arrayOf(PropTypes.string).isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    discount_for_premium: PropTypes.number.isRequired,
  }),
};

export default AdvantagesComponent;
