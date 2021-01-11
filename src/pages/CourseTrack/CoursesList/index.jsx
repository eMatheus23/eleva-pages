import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// Main
import courseTumbnail from '../../../assets/images/mockups/course-thumbnail-02.png';

const CoursesList = () => {
  return (
    <section className="courses-list">
      <h2>Os 6 cursos que compõem esta Trilha:</h2>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <Link to="/course-track">Detalhes</Link>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <Link to="/course-track">Detalhes</Link>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <Link to="/course-track">Detalhes</Link>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <Link to="/course-track">Detalhes</Link>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <Link to="/course-track">Detalhes</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
