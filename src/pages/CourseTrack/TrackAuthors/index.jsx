import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// Mockups
import mockupImg from '../../../assets/images/mockups/track-authors/scientist.png';

const TrackAuthors = () => {
  return (
    <section className="track-authors">
      <ul>
        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Tina Barbosa</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Dr.ª Margarete Manuele Siqueira Silva</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Dr.ª Mirele Almeira</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafaela Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafaela Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>

        <li>
          <img src={mockupImg} alt="Autor" />
          <div>
            <p>Rafael Ribeiro Garcia</p>
            <Link to="/">Sobre</Link>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TrackAuthors;
