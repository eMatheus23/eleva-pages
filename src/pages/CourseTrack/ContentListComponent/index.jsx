import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

// Main
import courseTumbnail from '../../../assets/images/mockups/course-thumbnail-02.png';

// Utils
import formatValue from '../../../utils/formatValue';

import AddCourseToCart from '../../../services/AddCourseToCart';

import cartIcon from '../../../assets/images/icons/cart-icon.svg';

const CourseDetailsModal = ({ closeModal, course }) => {
  const history = useHistory();

  const {
    id,
    authors,
    category,
    cover_url,
    modules,
    original_price,
    price,
    price_for_premium,
    title,
  } = course;

  const handlePurchase = courseId => {
    // Adicionar produto no cart
    AddCourseToCart({ productId: courseId });

    // Redirecionar para o checkout
    history.push('/checkout');
  };

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
          <button type="button" onClick={() => handlePurchase(id)}>
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

CourseDetailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  course: PropTypes.shape({
    id: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    cover_url: PropTypes.string.isRequired,
    modules: PropTypes.arrayOf(PropTypes.string).isRequired,
    original_price: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    price_for_premium: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

const ContentListComponent = ({ courses }) => {
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

ContentListComponent.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      category: PropTypes.string.isRequired,
      cover_url: PropTypes.string.isRequired,
      modules: PropTypes.arrayOf(PropTypes.string).isRequired,
      original_price: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      price_for_premium: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default ContentListComponent;
