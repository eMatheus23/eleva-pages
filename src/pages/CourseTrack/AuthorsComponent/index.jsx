import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const AuthorsComponent = ({ track }) => {
  const { authors } = track;

  return (
    <section className="track-authors">
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <img src={author.avatar_url} alt={author.name} />
            <div>
              <p>{author.name}</p>
              <Link to="/">Sobre</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AuthorsComponent;
