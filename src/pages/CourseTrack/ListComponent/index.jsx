import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './styles.css';

// Main
import courseTumbnail from '../../../assets/images/mockups/course-thumbnail-02.png';

// Utils
import formatValue from '../../../utils/formatValue';

import cartIcon from '../../../assets/images/icons/cart-icon.svg';

export const CourseDetailsModal = ({ closeModal, course }) => {
  const {
    authors,
    category,
    cover_url,
    modules,
    original_price,
    price,
    price_for_premium,
    title,
  } = course;

  return (
    <div className="course-datails-modal">
      <div className="content">
        <span
          onClick={closeModal}
          role="button"
          tabIndex={0}
          className="close-modal"
        >
          X
        </span>

        <img src={cover_url} alt="Título do Curso" />

        <h5>{category}</h5>

        <h3>{title}</h3>

        {modules.map((module, index) => (
          <p key={index}>
            Módulo
            <> </>
            {index + 1}
            <>. </>
            {module}
          </p>
        ))}

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

        <div className="purchase-container">
          <h4>Adquirir apenas este curso:</h4>
          <del>{formatValue(original_price)}</del>
          <h2>{formatValue(price)}</h2>
          <p>
            12x de
            <strong>
              <> </>
              {formatValue(price / 12)}
              <> </>
            </strong>
            no cartão
          </p>
          <button type="button">
            Compre agora
            <img src={cartIcon} alt="Compre Agora" />
          </button>
          <span>___ Ou ___</span>
          <section className="be-premium-offer">
            <p>Seja Premium e pague apenas:</p>
            <button type="button">{formatValue(price_for_premium)}</button>
          </section>

          <Link to="/">Acessar página do curso.</Link>
        </div>
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="clickable-background" onClick={closeModal} />
    </div>
  );
};

const ListComponent = ({ courses }) => {
  const modalRoot = document.getElementById('portal');
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});

  const closeModal = () => setModalOpened(false);

  const handleCourseSelection = id => {
    const [courseData] = courses.filter(course => course.id === id);

    setSelectedCourse(courseData);

    setModalOpened(true);
  };

  return (
    <>
      {modalOpened &&
        ReactDOM.createPortal(
          <CourseDetailsModal
            closeModal={closeModal}
            course={selectedCourse}
          />,
          modalRoot,
        )}
      <section className="courses-list">
        <h2>
          Os
          <> </>
          {courses.length}
          <> </>
          cursos que compõem esta Trilha:
        </h2>

        {courses.map(course => (
          <div className="course" key={course.id}>
            <div className="img-container">
              <div className="aspect-ratio">
                <div className="aspect-ratio__inner-wrapper">
                  {/* A imagem segue essa estrutura para manter o aspect ratio */}
                  <img src={courseTumbnail} alt={course.title} />
                </div>
              </div>
            </div>

            <div className="course-description">
              <div>
                <span>{course.category}</span>
                <p>{course.title}</p>
              </div>

              <div>
                <span>{formatValue(course.original_price)}</span>
                <button
                  type="button"
                  onClick={() => handleCourseSelection(course.id)}
                >
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ListComponent;
